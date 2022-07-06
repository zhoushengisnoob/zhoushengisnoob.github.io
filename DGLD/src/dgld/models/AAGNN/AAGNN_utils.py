from ast import arg
import shutil
import sys
import scipy.sparse as sp
import os
sys.path.append('../../')

import argparse
from tqdm import tqdm
import numpy as np
import torch
import random

def random_seed(seed):
    np.random.seed(seed)
    torch.manual_seed(seed)
    random.seed(seed)
    os.environ['PYTHONHASHSEED'] = str(seed)
    torch.cuda.manual_seed_all(seed)
    torch.backends.cudnn.deterministic = True
    torch.backends.cudnn.benchmark = False



def get_parse():
    parser = argparse.ArgumentParser(
        description='AAGNN: Subtractive Aggregation for Attributed Network Anomaly Detection')
    # "Cora", "Pubmed", "Citeseer"
    parser.add_argument('--dataset', type=str, default='Cora')
    parser.add_argument('--seed', type=int, default=7)
    # max min avg  weighted_sum
    parser.add_argument('--logdir', type=str, default='tmp')
    parser.add_argument('--embed_dim', type=int, default=256,
                        help='dimension of hidden embedding (default: 256)')
    parser.add_argument('--out_dim', type=int, default=128,
                        help='dimension of output embedding (default: 128)')
    parser.add_argument('--num_epoch', type=int,
                        default=100, help='Training epoch')
    parser.add_argument('--lr', type=float, default=0.001, help='learning rate')
    parser.add_argument('--batch_size', type=int, default=300)
    parser.add_argument('--dropout', type=float,
                        default=0.0, help='Dropout rate')
    parser.add_argument('--weight_decay', type=float,
                        default=0, help='weight decay')
    parser.add_argument('--alpha', type=float, default=0.7,
                        help='balance parameter')
    parser.add_argument('--eta', type=float, default=5.0,
                        help='Attribute penalty balance parameter')
    parser.add_argument('--theta', type=float, default=40.0,
                        help='structure penalty balance parameter')
    parser.add_argument('--device', type=str, default='cpu')
    



    args = parser.parse_args()

    if os.path.exists(args.logdir):
        shutil.rmtree(args.logdir)

    if args.lr is None:
        if args.dataset in ['Cora', 'Citeseer', 'Pubmed', 'Flickr']:
            args.lr = 1e-3
        elif args.dataset == 'ACM':
            args.lr = 5e-4
        elif args.dataset == 'BlogCatalog':
            args.lr = 3e-3
        elif args.dataset == 'ogbn-arxiv':
            args.lr = 1e-3

    if args.num_epoch is None:
        if args.dataset in ['Cora', 'Citeseer', 'Pubmed']:
            args.num_epoch = 100
        elif args.dataset in ['BlogCatalog', 'Flickr', 'ACM']:
            args.num_epoch = 400
        else:
            args.num_epoch = 10

    # random_seed(args.seed)

    in_feature_map = {
        "Cora":1433,
        "Citeseer":3703,
        "Pubmed":500,
        "BlogCatalog":8189,
        "Flickr":12047,
        "ACM":8337,
        "ogbn-arxiv":128,
    }
    num_nodes_map={
        "Cora":2708,
        "Citeseer":3327,
        "Pubmed":19717,
        "BlogCatalog":5196,
        "Flickr":7575,
        "ACM":16484,
        "ogbn-arxiv":169343,
    }
    final_args_dict = {
        "dataset": args.dataset,
        "seed":args.seed,
        "model":{
            "feat_size":in_feature_map[args.dataset],
            "out_dim":args.out_dim
        },
        "fit":{
            "lr":args.lr,
            "logdir":args.logdir,
            "num_epoch":args.num_epoch,
            "device":args.device,
        },
        "predict":{
            "device":args.device,
        }
    }
    return final_args_dict


def loss_func(adj, A_hat, attrs, X_hat, alpha,eta, theta):
    # Attribute reconstruction loss
    etas=attrs*(eta-1)+1
    diff_attribute = torch.pow((X_hat - attrs)* etas, 2) 
    attribute_reconstruction_errors = torch.sqrt(torch.sum(diff_attribute, 1))
    attribute_cost = torch.mean(attribute_reconstruction_errors)

    # structure reconstruction loss
    thetas = adj * (theta-1) + 1 
    diff_structure = torch.pow((A_hat - adj)* thetas, 2) 
    structure_reconstruction_errors = torch.sqrt(torch.sum(diff_structure, 1))
    structure_cost = torch.mean(structure_reconstruction_errors)

    cost = alpha * attribute_reconstruction_errors + \
        (1-alpha) * structure_reconstruction_errors

    return cost, structure_cost, attribute_cost


def train_step(model, optimizer, graph, features,adj_label,alpha,eta,theta):
    model.train()
    optimizer.zero_grad()
    A_hat, X_hat = model(graph, features)
    loss, struct_loss, feat_loss = loss_func(
        adj_label, A_hat, features, X_hat, alpha,eta,theta)
    l = torch.mean(loss)
    l.backward()
    optimizer.step()
    return l, struct_loss, feat_loss,loss.detach().cpu().numpy()


def test_step(model, graph, features,adj_label, alpha,eta,theta):
    model.eval()
    A_hat, X_hat = model(graph, features)
    loss, _, _ = loss_func(adj_label, A_hat, features, X_hat, alpha,eta,theta)
    score = loss.detach().cpu().numpy()
    # print("Epoch:", '%04d' % (epoch), 'Auc', roc_auc_score(label, score))
    return score

def normalize_adj(adj):
    """Symmetrically normalize adjacency matrix."""
    adj = sp.coo_matrix(adj)
    rowsum = np.array(adj.sum(1))
    d_inv_sqrt = np.power(rowsum, -0.5).flatten()
    d_inv_sqrt[np.isinf(d_inv_sqrt)] = 0.
    d_mat_inv_sqrt = sp.diags(d_inv_sqrt)
    return adj.dot(d_mat_inv_sqrt).transpose().dot(d_mat_inv_sqrt).tocoo()