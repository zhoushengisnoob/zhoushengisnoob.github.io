window.userData = {}

window.userData['data-mining-2021'] = {
    courseTitle: "数据挖掘与应用",
    courseSubTitle: "Data Mining and Application<br> (2021秋)",
    courseIntroduction: "随着信息技术的快速发展，人类生产生活中产生了海量的数据。分析和挖掘数据中的潜在模式以及客观规律，对于提升生活质量，生产效率具有重要的意义。\n" +
        "本课程主要讲述数据挖掘相关的基本概念，经典任务，前沿技术以及在实际生产生活中的应用。学习本课程有望在掌握数据挖掘相关知识的同时也培养相关的实践动手能力。",
    notifications: [
        // {
        //     content: '第二次课程作业截止日期：2021-11-14 23：59 <a href="https://workspace.jianguoyun.com/inbox/collect/889b492947744946aa04a2fa5d4e2467/submit" >提交地址</a>',
        //     level: 'info'
        // }
        // , {
        //     content: '课程通知内容',
        //     level: 'warning'
        // }, {
        //     content: '课程通知内容',
        //     level: 'success'
        // }, {
        //     content: '交**作业**了[提交地址](http://github.com)',
        //     level: 'danger'
        // }
    ],
    themeColor: '#337ab7',
    avatarGroup: [{
        groupName: "任课老师",
        members: [{
            url: './resources/zhousheng.png',
            name: '[周晟](https://zhoushengisnoob.github.io/)'
        }]
    }, {
        groupName: "助教",
        members: [{
            url: './resources/zhuonan.jpg',
            name: '[郑卓男](https://github.com/zfx233)'
        }, {
            url: './resources/huwei.jpg',
            name: '[胡伟](https://github.com/X4tar)'
        }, {
            url: './resources/xhj.jpg',
            name: '[徐鸿嘉](https://github.com/Frostland12138)'
        }]
    },
    ],
    sections: [{
        title: '课程信息',
        navTitle: '课程信息', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
        textItems: [{
            title: '准备知识',
            contents: ["选择此课程的同学建议具备以下知识：",
                ["1. 计算机科学与技术基础知识", "2. 线性代数基础", "3. 概率论基础", "4. Python / Matlab 基础代码能力"],
                "课程第一周将详细介绍具体的准备知识要求"]
        }, {
            title: '参考书目',
            contents: [["1.《数据挖掘概念与技术》，机械工业出版社，2012", "2. 《统计学习方法》，清华大学出版社，2019", "3. 《数据可视化》，陈为等著，电子工业出版社，2019", "4. 《大数据平台异常检测分析的若干关键技术研究》，肖如良编著，电子工业出版社，2020",
                "5. 《深入浅出图神经网络:GNN 原理解析》，刘忠雨，李彦霖，周洋编著，机械工业出版社，2020"]]
        }]
    },
        {
            title: '课程大纲',
            navTitle: '课程大纲', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
            textItems: [{
                title: "课程PPT将在授课后一天更新"
            }],
            tableData: { // 删除该字段，则不显示表格
                heads: ['时间', '课程内容', '课程概述', '课程PPT'],
                rows: [['2021-09-16', '数据挖掘与应用简介', '介绍课程的主要内容，形式，要求', ' <a href="./resources/DMCourse_1.pdf" target="_blank">DMCourse_1.pdf</a> '],
                    // ['2021-09-23', '数据预处理技术', '介绍数据采集与数据预处理技术，包括数据清洗，归约与变换', ''],
                    ['2021-09-26', '数据分类技术', '介绍常见的数据分类技术和回归任务，包括决策树、线性回归、线性判别、初探SVM', ' <a href="./resources/DMCourse_2.pdf" target="_blank">DMCourse_2.pdf</a> '],
                    ['2021-09-30', '数据分类技术2', '介绍贝叶斯分类器、深入理解SVM','<a href="./resources/DMCourse_3.pdf" target="_blank">DMCourse_3.pdf</a> <a href="./resources/titanic.zip" target="_blank">titanic.zip</a>'],
                    ['2021-10-14', '数据聚类技术', '介绍常见的聚类检测技术和指标，包括Kmeans改进版、谱聚类、层次聚类、高斯混合模型聚类、DBSCAN聚类等技术', '<a href="./resources/DMCourse_4.pdf" target="_blank">DMCourse_4.pdf</a>'],
                    ['2021-10-21', '深度聚类技术', '介绍常见的深度聚类技术，如嵌入式聚类系列、对比聚类系列、伪标签系列等，以及基于聚类的表征学习和其他数据类型的聚类。', '<a href="./resources/DMCourse_5.pdf" target="_blank">DMCourse_5.pdf</a>'],
                    ['2021-10-27', '异常检测技术', '介绍常见的异常检测技术', '<a href="./resources/DMCourse_6.pdf" target="_blank">DMCourse_6.pdf</a>'],
                    ['2021-10-28', '深度异常检测技术', '介绍常见的深度异常检测技术，如深度特征提取、基于特征提取的异常性判断、面向异常检测的特征学习、端到端异常检测模型等。', '<a href="./resources/DMCourse_7.pdf" target="_blank">DMCourse_7.pdf</a> <a href="./resources/VAE_Note.pdf" target="_blank">VAE_Note.pdf</a>'],
                    ['2021-11-04', '图数据挖掘技术 ', '介绍图数据挖掘相关技术，如图上的聚类、分类、异常检测等', '<a href="./resources/DMCourse_8.pdf" target="_blank">DMCourse_8.pdf</a>']]
            }
        },
        {
            title: '常见问题',
            navTitle: "FAQ",
            textItems: [{
                contents: ["**Q**：本课程的考核形式是什么?",
                    "**A**：课程将设置随堂测试(2*10%) + 期末报告(80%)",
                    "**Q**：本课程如何考勤？",
                    "**A**：本课程不单独设置考勤，以随堂测试为准",
                    "**Q**：课程是否安排答疑？",
                    "**A**：老师和助教将在钉钉群内答疑"
                ]
            }],
        }]
}


window.userData['gnn-2021'] = {
    courseTitle: "图神经网络",
    courseSubTitle: "Graph Neural Network",
    courseIntroduction: "本课程主要讲述图神经网络的相关背景、现有技术以及在实际生产生活中的应用。 通过兼顾学术前沿与落地应用，提供图神经网络这一研究领域的核心知识，与当前工业界学术界的应用场景紧密相关，并着重强调图神经网络的落地应用能力。",
    themeColor: '#ee4c2c',
    notifications: [
        {
            content: '[2022-02-08] 大家好，今天注意到有部分公众号转发了本课程（事先并未与我们联系）。本课程页面的初衷是为了帮助选课的同学及时查看信息，无意大范围宣传。因为本人能力有限，课件可能存在诸多不完善的地方，还望大家见谅。如有任何问题或错误，请及时与我联系:zhousheng_zju@zju.edu.cn',
            level: 'danger'
        }

    ],
    avatarGroup: [{
        groupName: "任课老师",
        members: [{
            url: './resources/zhousheng.png',
            name: '[周晟](https://zhoushengisnoob.github.io/)'
        }]
    }, {
        groupName: "助教",
        members: [{
            url: './resources/zhuonan.jpg',
            name: '[郑卓男](https://github.com/zfx233)'
        }, {
            url: './resources/huwei.jpg',
            name: '[胡伟](https://github.com/X4tar)'
        }, {
            url: './resources/xhj.jpg',
            name: '[徐鸿嘉](https://github.com/Frostland12138)'
        }]
    },
    ],
    sections: [{
        title: '课程信息',
        navTitle: '课程信息', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
        textItems: [{
            title: "参考书目",
            contents: [["1.《图卷积神经网络综述》，徐冰冰等，计算机学报，2020",
                "2. 《图神经网络推荐研究进展》，吴国栋，智能系统学报，2020",
                "3. 《图神经网络导论》，刘知远编著，人民邮电出版社，2021",
                "4. 《图神经网络：基础与前沿》，马腾飞编著，电子工业出版社，2018",
                "5. 《深入浅出图神经网络:GNN 原理解析》，刘忠雨，李彦霖，周洋编著，机械工业出版社，2020"]]
        }]
    },
        {
            title: '课程大纲',
            navTitle: '课程大纲', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
            textItems: [{
                title: "课程PPT将在授课后一天更新"
            }],
            tableData: { // 删除该字段，则不显示表格
                heads: ['时间', '课程内容', '课程概述', '课程PPT'],
                rows: [['2021-11-12', '图神经网络简介', '课程介绍、认识图数据、介绍图特征和图数据挖掘任务；介绍节点表征学习的方法，包括基于矩阵分解和基于随机游走，并证明随机游走和矩阵分解的等价性', '<a href="./resources/GNNCourse_0.pdf" target="_blank">GNNCourse_0.pdf</a> <a href="./resources/GNNCourse_1.pdf" target="_blank">GNNCourse_1.pdf</a>'],
                    ['2021-11-19', '经典图神经网络', '介绍基于深度自编码器的节点表征学习、融合节点属性的节点表征学习、基于消息传递的节点表征学习和经典图神经网络', '<a href="./resources/GNNCourse_2.pdf" target="_blank">GNNCourse_2.pdf</a> '],
                    ['2021-11-26', '卷积图神经网络', '介绍卷积、傅里叶变换、图傅里叶变换和卷积图神经网络示例', '<a href="./resources/GNNCourse_3.pdf" target="_blank">GNNCourse_3.pdf</a> '],
                    ['2021-12-3', '循环图神经网络', '介绍循环神经网络、LSTM、GRU以及在图神经网络上的应用', '<a href="./resources/GNNCourse_4.pdf" target="_blank">GNNCourse_4.pdf</a> '],
                    ['2021-12-10', '图结构学习神经网络', '介绍图结构学习神经网络、图结构生成网络', '<a href="./resources/GNNCourse_5.pdf" target="_blank">GNNCourse_5.pdf</a> '],
                    ['2021-12-17', '深度社区发现', '介绍图神经网络应用于社区发现任务的思路、案例', '<a href="./resources/GNNCourse_6.pdf" target="_blank">GNNCourse_6.pdf</a> '],
                    ['2021-12-24', '富信息图神经网络', '介绍有向图、异构图和动态图的图神经网络技术', '<a href="./resources/GNNCourse_7.pdf" target="_blank">GNNCourse_7.pdf</a>'],
                    ['2021-12-31', ' Invited Talk', '介绍知识图谱、工业图神经网络和图神经网络动手实践', '']]
            }
        },
       {
            title: '常见问题',
            navTitle: "FAQ",
            textItems: [{
                contents: ["**Q**：本课程的考核形式是什么?",
                    "**A**：期末提交一份综述或实验报告",
                    "**Q**：本课程如何考勤？",
                    "**A**：本课程不单独设置考勤，以期末报告为准",
                    "**Q**：课程是否安排答疑？",
                    "**A**：老师和助教将在钉钉群内答疑"
                ]
            }],
        }]
}


window.userData['data-mining-2022'] = {
    courseTitle: "数据挖掘与应用",
    courseSubTitle: "Data Mining and Application<br> （2022 秋）",
    courseIntroduction: "随着信息技术的快速发展，人类生产生活中产生了海量的数据。分析和挖掘数据中的潜在模式以及客观规律，对于提升生活质量，生产效率具有重要的意义。\n" +
        "本课程主要讲述数据挖掘相关的基本概念，经典任务，前沿技术以及在实际生产生活中的应用。学习本课程有望在掌握数据挖掘相关知识的同时也培养相关的实践动手能力。",
    notifications: [
        {
            content: '2022-2023秋学期选课已经开始，欢迎大家选择本课程。',
            level: 'info'
        }
        // , {
        //     content: '课程通知内容',
        //     level: 'warning'
        // }, {
        //     content: '课程通知内容',
        //     level: 'success'
        // }, {
        //     content: '交**作业**了[提交地址](http://github.com)',
        //     level: 'danger'
        // }
    ],
    themeColor: '#337ab7',
    avatarGroup: [{
        groupName: "任课老师",
        members: [{
            url: './resources/zhousheng.png',
            name: '[周晟](https://zhoushengisnoob.github.io/)'
        }]
    }, {
        groupName: "助教",
        members: [{
            url: './resources/zhuonan.jpg',
            name: '[郑卓男](https://github.com/zfx233)'
        }, {
            url: './resources/huwei.jpg',
            name: '[胡伟](https://github.com/X4tar)'
        }, {
            url: './resources/xhj.jpg',
            name: '[徐鸿嘉](https://github.com/Frostland12138)'
        }]
    },
    ],
    sections: [{
        title: '课程信息',
        navTitle: '课程信息', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
        textItems: [{
            title: '准备知识',
            contents: ["选择此课程的同学建议具备以下知识：",
                ["1. 计算机科学与技术基础知识", "2. 线性代数基础", "3. 概率论基础", "4. Python / Matlab 基础代码能力"],
                "课程第一周将详细介绍具体的准备知识要求"]
        }, {
            title: '参考书目',
            contents: [["1.《数据挖掘概念与技术》，机械工业出版社，2012", "2. 《统计学习方法》，清华大学出版社，2019", "3. 《数据可视化》，陈为等著，电子工业出版社，2019", "4. 《大数据平台异常检测分析的若干关键技术研究》，肖如良编著，电子工业出版社，2020",
                "5. 《深入浅出图神经网络:GNN 原理解析》，刘忠雨，李彦霖，周洋编著，机械工业出版社，2020"]]
        }]
    },
        {
            title: '课程大纲',
            navTitle: '课程大纲', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
            textItems: [{
                title: "课程PPT将在授课后一天更新"
            }],
            tableData: { // 删除该字段，则不显示表格
                heads: ['时间', '课程内容', '课程概述', '课程PPT'],
                rows: [['2022-09-13', '课程简介', '介绍课程的主要内容，形式。介绍数据采集与数据预处理技术，包括数据清洗，归约与变换', '<a href="./resources/DMCourse_1_2022.pdf" target="_blank">Section1.pdf</a> '],
                    ['2022-09-20', '数据分类技术', '介绍常见的数据分类技术和回归任务，包括决策树、线性回归、线性判别、集成学习', '<a href="./resources/DMCourse_2_2022.pdf" target="_blank">Section2.pdf</a> '],
                    ['2022-09-27', '数据分类技术2', '介绍贝叶斯分类器、深入理解SVM','<a href="./resources/DMCourse_3_2022.pdf" target="_blank">Section3.pdf</a>'],
                    ['2022-10-11', '数据聚类技术', '介绍常见的聚类检测技术和指标，包括Kmeans改进版、谱聚类、层次聚类、高斯混合模型聚类、DBSCAN聚类等技术', '<a href="./resources/DMCourse_4_2022.pdf" target="_blank">Section4.pdf</a>'],
                    ['2022-10-18', '深度聚类技术', '介绍常见的深度聚类技术，如嵌入式聚类系列、对比聚类系列、伪标签系列等，以及基于聚类的表征学习和其他数据类型的聚类。', '<a href="./resources/DMCourse_5_2022.pdf" target="_blank">Section5.pdf</a>'],
                    ['2022-10-25', '异常检测技术', '介绍常见的异常检测技术', '<a href="./resources/DMCourse_6_2022.pdf" target="_blank">Section6.pdf</a>'],
                    ['2022-11-1', '深度异常检测技术', '介绍常见的深度异常检测技术，如深度特征提取、基于特征提取的异常性判断、面向异常检测的特征学习、端到端异常检测模型等。', '<a href="./resources/DMCourse_7_2022.pdf" target="_blank">Section7.pdf</a>']]
            }
        },
        {
            title: '常见问题',
            navTitle: "FAQ",
            textItems: [{
                contents: ["**Q**：本课程的考核形式是什么?",
                    "**A**：课程将设置随堂测试(2*10%) + 期末报告(80%)",
                    "**Q**：本课程如何考勤？",
                    "**A**：本课程不单独设置考勤，以随堂测试为准",
                    "**Q**：课程是否安排答疑？",
                    "**A**：老师和助教将在钉钉群内答疑"
                ]
            }],
        }]
}

window.userData['gnn-2022'] = {
    courseTitle: "图神经网络",
    courseSubTitle: "Graph Neural Network",
    courseIntroduction: "本课程主要讲述图神经网络的相关背景、现有技术以及在实际生产生活中的应用。 通过兼顾学术前沿与落地应用，提供图神经网络这一研究领域的核心知识，与当前工业界学术界的应用场景紧密相关，并着重强调图神经网络的落地应用能力。",
    themeColor: '#ee4c2c',
    // notifications: [
    //     {
    //         content: '[2022-02-08] 大家好，今天注意到有部分公众号转发了本课程（事先并未与我们联系）。本课程页面的初衷是为了帮助选课的同学及时查看信息，无意大范围宣传。因为本人能力有限，课件可能存在诸多不完善的地方，还望大家见谅。如有任何问题或错误，请及时与我联系:zhousheng_zju@zju.edu.cn',
    //         level: 'danger'
    //     }

    // ],
    avatarGroup: [{
        groupName: "任课老师",
        members: [{
            url: './resources/zhousheng.png',
            name: '[周晟](https://zhoushengisnoob.github.io/)'
        }]
    }, {
        groupName: "助教",
        members: [{
            url: './resources/zhuonan.jpg',
            name: '[郑卓男](https://github.com/zfx233)'
        }, 
         {
            url: './resources/xhj.jpg',
            name: '[徐鸿嘉](https://github.com/Frostland12138)'
        },
        {
            url: './resources/sjk.png',
            name: '[施金轲](https://github.com/cfuser)'
        }
    ]
    },
    ],
    sections: [{
        title: '课程信息',
        navTitle: '课程信息', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
        textItems: [{
            title: "参考书目",
            contents: [["1.《图卷积神经网络综述》，徐冰冰等，计算机学报，2020",
                "2. 《图神经网络推荐研究进展》，吴国栋，智能系统学报，2020",
                "3. 《图神经网络导论》，刘知远编著，人民邮电出版社，2021",
                "4. 《图神经网络：基础与前沿》，马腾飞编著，电子工业出版社，2018",
                "5. 《深入浅出图神经网络:GNN 原理解析》，刘忠雨，李彦霖，周洋编著，机械工业出版社，2020"]]
        }]
    },
        {
            title: '课程大纲',
            navTitle: '课程大纲', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
            textItems: [{
                title: "课程PPT将在授课后一天更新"
            }],
            tableData: { // 删除该字段，则不显示表格
                heads: ['时间', '课程内容', '课程概述', '课程PPT'],
                rows: [['2022-11-09', '图神经网络简介', '课程介绍、认识图数据；介绍节点表征学习的方法，包括基于矩阵分解和基于随机游走', '<a href="./resources/GNNCourse_0_2022.pdf" target="_blank">GNNCourse_0.pdf</a> <a href="./resources/GNNCourse_1_2022.pdf" target="_blank">GNNCourse_1.pdf</a>'],
                    ['2022-11-16', '经典图神经网络', '介绍基于深度自编码器的节点表征学习、融合节点属性的节点表征学习、基于消息传递的节点表征学习', '<a href="./resources/GNNCourse_2_2022.pdf" target="_blank">GNNCourse_2.pdf</a>'],
                    ['2022-11-23', '卷积图神经网络', '介绍卷积、傅里叶变换、图傅里叶变换和卷积图神经网络示例', '<a href="./resources/GNNCourse_3_2022.pdf" target="_blank">GNNCourse_3.pdf</a>'],
                    ['2022-11-30', '富信息图神经网络', '介绍有向图、异构图和动态图的图神经网络技术', '<a href="./resources/GNNCourse_4_2022.pdf" target="_blank">GNNCourse_4.pdf</a>'],
                    ['2022-12-7', '图结构学习神经网络', '介绍图结构学习神经网络、图结构生成网络', '<a href="./resources/GNNCourse_5_2022.pdf" target="_blank">GNNCourse_5.pdf</a>'],
                    ['2022-12-14', '深度社区发现', '介绍图神经网络应用于社区发现任务的思路、案例', '<a href="./resources/GNNCourse_6_2022.pdf" target="_blank">GNNCourse_6.pdf</a>'],
                    ['2022-12-21', '图异常检测', '介绍图神经网络在图异常检测上的应用', '<a href="./resources/GNNCourse_7_2022.pdf" target="_blank">GNNCourse_7.pdf</a>'],
                    ['2022-12-28', '图神经网络探索', '介绍基于对比学习的图神经网络和动态图神经网络', '<a href="./resources/GNNCourse_8_1_2022.pdf" target="_blank">GNNCourse_8_1.pdf</a> <a href="./resources/GNNCourse_8_2_2022.pdf" target="_blank">GNNCourse_8_2.pdf</a>']]
            }
        },
       {
            title: '常见问题',
            navTitle: "FAQ",
            textItems: [{
                contents: ["**Q**：本课程的考核形式是什么?",
                    "**A**：期末提交一份综述或实验报告",
                    "**Q**：本课程如何考勤？",
                    "**A**：本课程不单独设置考勤，以期末报告为准",
                    "**Q**：课程是否安排答疑？",
                    "**A**：老师和助教将在钉钉群内答疑"
                ]
            }],
        }]
}



window.userData['data-mining-2023'] = {
    courseTitle: "数据挖掘与应用",
    courseSubTitle: "Data Mining and Application<br> （2023 秋）",
    courseIntroduction: "随着信息技术的快速发展，人类生产生活中产生了海量的数据。分析和挖掘数据中的潜在模式以及客观规律，对于提升生活质量，生产效率具有重要的意义。\n" +
        "本课程主要讲述数据挖掘相关的基本概念，经典任务，前沿技术以及在实际生产生活中的应用。学习本课程有望在掌握数据挖掘相关知识的同时也培养相关的实践动手能力。",
    notifications: [
        {
            content: '2023-2024秋学期选课已经开始，欢迎大家选择本课程。',
            level: 'info'
        }
        // , {
        //     content: '课程通知内容',
        //     level: 'warning'
        // }, {
        //     content: '课程通知内容',
        //     level: 'success'
        // }, {
        //     content: '交**作业**了[提交地址](http://github.com)',
        //     level: 'danger'
        // }
    ],
    themeColor: '#337ab7',
    avatarGroup: [{
        groupName: "任课老师",
        members: [{
            url: './resources/zhousheng.png',
            name: '[周晟](https://zhoushengisnoob.github.io/)'
        }]
    }, {
        groupName: "助教",
        members: [{
            url: './resources/zhuonan.jpg',
            name: '[郑卓男](https://github.com/zfx233)'
        },  {
            url: './resources/xhj.jpg',
            name: '[徐鸿嘉](https://github.com/Frostland12138)'
        }]
    },
    ],
    sections: [{
        title: '课程信息',
        navTitle: '课程信息', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
        textItems: [{
            title: '准备知识',
            contents: ["选择此课程的同学建议具备以下知识：",
                ["1. 计算机科学与技术基础知识", "2. 线性代数基础", "3. 概率论基础", "4. Python / Matlab 基础代码能力"],
                "课程第一周将详细介绍具体的准备知识要求"]
        }, {
            title: '参考书目',
            contents: [["1.《数据挖掘概念与技术》，机械工业出版社，2012", "2. 《统计学习方法》，清华大学出版社，2019", "3. 《数据可视化》，陈为等著，电子工业出版社，2019", "4. 《大数据平台异常检测分析的若干关键技术研究》，肖如良编著，电子工业出版社，2020",
                "5. 《深入浅出图神经网络:GNN 原理解析》，刘忠雨，李彦霖，周洋编著，机械工业出版社，2020"]]
        }]
    },
        {
            title: '课程大纲',
            navTitle: '课程大纲', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
            textItems: [{
                title: "课程PPT将在授课后一天更新"
            }],
            tableData: { // 删除该字段，则不显示表格
                heads: ['时间', '课程内容', '课程概述', '课程PPT'],
                rows: [['2023-09-19', '课程简介', '介绍课程的主要内容，形式。介绍数据采集与数据预处理技术，包括数据清洗，归约与变换,介绍数据为中心的人工智能',
                '<a href="./resources/DMCourse_1_2023.pdf" target="_blank">Lecture 1.pdf</a> '
            ],
                    ['2023-09-26', '数据分类技术', '介绍常见的数据分类技术和回归任务，包括决策树、线性回归、线性判别、集成学习',
                    '<a href="./resources/DMCourse_2_2023.pdf" target="_blank">Lecture 2.pdf</a> '
                ],
                    ['2023-10-10', '数据分类技术2', '介绍贝叶斯分类器，深入理解SVM，【New】深度分类模型，不平衡分类问题',
                    '<a href="./resources/DMCourse_3_2023.pdf" target="_blank">Lecture 3.pdf</a>'
                ],
                    ['2023-10-17', '数据聚类技术', '介绍常见的聚类检测技术和指标，包括Kmeans改进版、谱聚类、层次聚类、高斯混合模型聚类、DBSCAN聚类等技术', 
                    '<a href="./resources/DMCourse_4_2023.pdf" target="_blank">Lecture 4.pdf</a>'
                ],
                    ['2023-10-24', '深度聚类技术', '介绍常见的深度聚类技术，如嵌入式聚类系列、对比聚类系列、伪标签系列等，以及基于聚类的表征学习和其他数据类型的聚类。',
                    '<a href="./resources/DMCourse_5_2023.pdf" target="_blank">Lecture 5.pdf</a>'
                ],
                    ['2023-10-31', '异常检测技术', '介绍常见的异常检测技术和部分深度异常检测技术',
                    '<a href="./resources/DMCourse_6_2023.pdf" target="_blank">Lecture 6.pdf</a>'
                ],
                    ['2023-11-07', '深度异常检测技术', '介绍常见的深度异常检测技术，如深度特征提取、基于特征提取的异常性判断、面向异常检测的特征学习、端到端异常检测模型等。', 
                    '<a href="./resources/DMCourse_7_2023.pdf" target="_blank">Lecture 7.pdf</a>'
                ]]
            }
        },
        {
            title: '常见问题',
            navTitle: "FAQ",
            textItems: [{
                contents: ["**Q**：本课程的考核形式是什么?",
                    "**A**：期末实验报告或期末综述论文",
                    "**Q**：本课程如何考勤？",
                    "**A**：本课程不单独设置考勤，以随堂测试为准",
                    "**Q**：课程是否安排答疑？",
                    "**A**：老师和助教将在钉钉群内答疑"
                ]
            }],
        }]
}



window.userData['gnn-2023'] = {
    courseTitle: "图神经网络",
    courseSubTitle: "Graph Neural Network",
    courseIntroduction: "本课程主要讲述图神经网络的相关背景、现有技术以及在实际生产生活中的应用。 通过兼顾学术前沿与落地应用，提供图神经网络这一研究领域的核心知识，与当前工业界学术界的应用场景紧密相关，并着重强调图神经网络的落地应用能力。",
    themeColor: '#ee4c2c',
    notifications: [
        {
            content: '[2023-11-13] 欢迎大家选择冬学期课程，时间是每周二下午，地点是教学楼N306。本学期课程将邀请多位企业专家进行授课与交流。',
            level: 'danger'
        }

    ],
    avatarGroup: [{
        groupName: "任课老师",
        members: [{
            url: './resources/zhousheng.png',
            name: '[周晟](https://zhoushengisnoob.github.io/)'
        }]
    }, {
        groupName: "助教",
        members: [{
            url: './resources/zhuonan.jpg',
            name: '[郑卓男](https://github.com/zfx233)'
        }, 
         {
            url: './resources/xhj.jpg',
            name: '[徐鸿嘉](https://github.com/Frostland12138)'
        },
        {
            url: './resources/sjk.png',
            name: '[施金轲](https://github.com/cfuser)'
        }
    ]
    },
    ],
    sections: [{
        title: '课程信息',
        navTitle: '课程信息', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
        textItems: [{
            title: "参考书目",
            contents: [["1.《图卷积神经网络综述》，徐冰冰等，计算机学报，2020",
                "2. 《图神经网络推荐研究进展》，吴国栋，智能系统学报，2020",
                "3. 《图神经网络导论》，刘知远编著，人民邮电出版社，2021",
                "4. 《图神经网络：基础与前沿》，马腾飞编著，电子工业出版社，2018",
                "5. 《深入浅出图神经网络:GNN 原理解析》，刘忠雨，李彦霖，周洋编著，机械工业出版社，2020"]]
        }]
    },
        {
            title: '课程大纲',
            navTitle: '课程大纲', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
            textItems: [{
                title: "课程PPT将在授课后一天更新"
            }],
            tableData: { // 删除该字段，则不显示表格
                heads: ['时间', '课程内容', '课程概述', '课程PPT'],
                rows: [['2023-11-14', '图神经网络简介', '课程介绍、认识图数据；介绍节点表征学习的方法，包括基于矩阵分解和基于随机游走', '<a href="./resources/GNNCourse_0_2023.pdf" target="_blank">Lecture 0.pdf</a> <a href="./resources/GNNCourse_1_2023.pdf" target="_blank">Lecture 1.pdf</a>'],
                    ['2023-11-21', '经典图神经网络', '介绍基于深度自编码器的节点表征学习、融合节点属性的节点表征学习、基于消息传递的节点表征学习', '<a href="./resources/GNNCourse_2_2023.pdf" target="_blank">Lecture 2.pdf</a>'],
                    ['2023-11-28', '卷积图神经网络', '介绍卷积、傅里叶变换、图傅里叶变换和卷积图神经网络示例', '<a href="./resources/GNNCourse_3_2023.pdf" target="_blank">Lecture 3.pdf</a>'],
                    ['2023-12-5', '富信息图神经网络', '介绍有向图、异构图和动态图的图神经网络技术', '<a href="./resources/GNNCourse_4_2023.pdf" target="_blank">Lecture 4.pdf</a>'],
                    ['2023-12-12', '图结构学习神经网络', '介绍图结构学习神经网络、图结构生成网络', '<a href="./resources/GNNCourse_5_2023.pdf" target="_blank">Lecture 5.pdf</a>'],
                    ['2023-12-19', '深度社区发现', '介绍图神经网络应用于社区发现任务的思路、案例', '<a href="./resources/GNNCourse_6_2023.pdf" target="_blank">Lecture 6.pdf</a>'],
                    ['2023-12-26', '图异常检测', '介绍图神经网络在图异常检测上的应用', '<a href="./resources/GNNCourse_7_2023.pdf" target="_blank">Lecture 7.pdf</a>'],
                    ['2024-01-02', '图神经网络探索', '介绍基于对比学习的图神经网络和动态图神经网络', '<a href="./resources/tutorial.ipynb" target="_blank">Tutorial.ipynb</a>']]
            }
        },
       {
            title: '常见问题',
            navTitle: "FAQ",
            textItems: [{
                contents: ["**Q**：本课程的考核形式是什么?",
                    "**A**：期末提交一份综述或实验报告",
                    "**Q**：本课程如何考勤？",
                    "**A**：本课程不单独设置考勤，以期末报告为准",
                    "**Q**：课程是否安排答疑？",
                    "**A**：老师和助教将在钉钉群内答疑"
                ]
            }],
        }]
}

window.userData['data-mining-2024'] = {
    courseTitle: "数据挖掘与应用",
    courseSubTitle: "Data Mining and Application<br> （2024 秋）",
    courseIntroduction: "随着信息技术的快速发展，人类生产生活中产生了海量的数据。分析和挖掘数据中的潜在模式以及客观规律，对于提升生活质量，生产效率具有重要的意义。\n" +
        "本课程主要讲述数据挖掘相关的基本概念，经典任务，前沿技术以及在实际生产生活中的应用。学习本课程有望在掌握数据挖掘相关知识的同时也培养相关的实践动手能力。",
    notifications: [
        {
            content: '[2024.09.10] 接学院通知，原“本科生院 研究生院关于2024年中秋节、国庆节、秋季校运动会期间教学安排的温馨提醒”中的9月21日（周六）补9月17日（周二）课调整为9月28日（周六）补9月17日（周二）课，其余安排不变。',
            level: 'danger'
        },
        {
            content: '[2024.08.31] 2024-2025秋学期选课已经开始，欢迎大家选择本课程。',
            level: 'info'
        }
        // , {
        //     content: '课程通知内容',
        //     level: 'warning'
        // }, {
        //     content: '课程通知内容',
        //     level: 'success'
        // }, 
        
    ],
    themeColor: '#337ab7',
    avatarGroup: [{
        groupName: "任课老师",
        members: [{
            url: './resources/zhousheng.png',
            name: '[周晟](https://zhoushengisnoob.github.io/)'
        }]
    }, {
        groupName: "助教",
        members: [{
            url: './resources/zhuonan.jpg',
            name: '[郑卓男](https://github.com/zfx233)'
        },  {
            url: './resources/xhj.jpg',
            name: '[徐鸿嘉](https://github.com/Frostland12138)'
        }]
    },
    ],
    sections: [{
        title: '课程信息',
        navTitle: '课程信息', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
        textItems: [{
            title: '准备知识',
            contents: ["选择此课程的同学建议具备以下知识：",
                ["1. 计算机科学与技术基础知识", "2. 线性代数基础", "3. 概率论基础", "4. Python / Matlab 基础代码能力"],
                "课程第一周将详细介绍具体的准备知识要求"]
        }, {
            title: '参考书目',
            contents: [["1.《数据挖掘概念与技术》，机械工业出版社，2012", "2. 《统计学习方法》，清华大学出版社，2019", "3. 《数据可视化》，陈为等著，电子工业出版社，2019", "4. 《大数据平台异常检测分析的若干关键技术研究》，肖如良编著，电子工业出版社，2020",
                "5. 《深入浅出图神经网络:GNN 原理解析》，刘忠雨，李彦霖，周洋编著，机械工业出版社，2020"]]
        }]
    },
        {
            title: '课程大纲【暂定】',
            navTitle: '课程大纲', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
            textItems: [{
                title: "课程PPT将在授课后一天更新"
            }],
            tableData: { // 删除该字段，则不显示表格
                heads: ['时间', '课程内容', '课程概述', '课程PPT'],
                rows: [['2024-09-10', '课程简介', '介绍课程的主要内容，形式。介绍数据采集与数据预处理技术，包括数据清洗，归约与变换,介绍数据为中心的人工智能',
                '<a href="./resources/DMCourse_1_2024.pdf" target="_blank">第一次课.pdf</a>'
            ],
                    ['2024-09-24', '数据分类技术', '介绍常见的数据分类技术和回归任务，包括决策树、线性回归、线性判别、集成学习',
                    '<a href="./resources/DMCourse_2_2024.pdf" target="_blank">第二次课.pdf</a>'
                ],
                    ['2024-09-27', '数据分类技术2', '介绍贝叶斯分类器，深入理解SVM，【New】深度分类模型，不平衡分类问题',
                    '<a href="./resources/DMCourse_3_2024.pdf" target="_blank">第三次课.pdf</a>'
                ],
                    ['2024-10-08', '数据聚类技术', '介绍常见的聚类检测技术和指标，包括Kmeans改进版、谱聚类、层次聚类、高斯混合模型聚类、DBSCAN聚类等技术', 
                    '<a href="./resources/DMCourse_4_2024.pdf" target="_blank">第四次课.pdf</a>'
                ],
                    ['2024-10-15', '深度聚类技术', '介绍常见的深度聚类技术，如嵌入式聚类系列、对比聚类系列、伪标签系列等，以及基于聚类的表征学习和其他数据类型的聚类。',
                    '<a href="./resources/DMCourse_5_2024.pdf" target="_blank">第五次课.pdf</a>'
                ],
                    ['2024-10-22', '异常检测技术', '介绍常见的异常检测技术和部分深度异常检测技术',
                    '<a href="./resources/DMCourse_6_2024.pdf" target="_blank">第六次课.pdf</a>'
                ],
                    ['2024-10-29', '深度异常检测技术', '介绍常见的深度异常检测技术，如深度特征提取、基于特征提取的异常性判断、面向异常检测的特征学习、端到端异常检测模型等。','<a href="./resources/DMCourse_7_2024.pdf" target="_blank">第七次课.pdf</a> ', 
                    ''
                ]]
            }
        },
        {
            title: '常见问题',
            navTitle: "FAQ",
            textItems: [{
                contents: ["**Q**：本课程的考核形式是什么?",
                    "**A**：期末实验报告或期末综述论文",
                    "**Q**：本课程如何考勤？",
                    "**A**：本课程不单独设置考勤，以随堂测试为准",
                    "**Q**：课程是否安排答疑？",
                    "**A**：老师和助教将在钉钉群内答疑"
                ]
            }],
        }]
}


window.userData['gnn-2024'] = {
    courseTitle: "图神经网络",
    courseSubTitle: "Graph Neural Network",
    courseIntroduction: "本课程主要讲述图神经网络的相关背景、现有技术以及在实际生产生活中的应用。 通过兼顾学术前沿与落地应用，提供图神经网络这一研究领域的核心知识，与当前工业界学术界的应用场景紧密相关，并着重强调图神经网络的落地应用能力。",
    themeColor: '#ee4c2c',
    notifications: [
        {
            content: '[2024-10-30] 欢迎大家选择冬学期课程，时间是每周二下午，地点是教学楼N306。本学期课程将邀请多位企业专家进行授课与交流。',
            level: 'danger'
        }

    ],
    avatarGroup: [{
        groupName: "任课老师",
        members: [{
            url: './resources/zhousheng.png',
            name: '[周晟](https://zhoushengisnoob.github.io/)'
        }]
    }, {
        groupName: "助教",
        members: [{
            url: './resources/zhuonan.jpg',
            name: '[郑卓男](https://github.com/zfx233)'
        }, 
         {
            url: './resources/xhj.jpg',
            name: '[徐鸿嘉](https://github.com/Frostland12138)'
        },
        // {
        //     url: './resources/sjk.png',
        //     name: '[施金轲](https://github.com/cfuser)'
        // }
    ]
    },
    ],
    sections: [{
        title: '课程信息',
        navTitle: '课程信息', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
        textItems: [{
            title: "参考书目",
            contents: [["1.《图卷积神经网络综述》，徐冰冰等，计算机学报，2020",
                "2. 《图神经网络推荐研究进展》，吴国栋，智能系统学报，2020",
                "3. 《图神经网络导论》，刘知远编著，人民邮电出版社，2021",
                "4. 《图神经网络：基础与前沿》，马腾飞编著，电子工业出版社，2018",
                "5. 《深入浅出图神经网络:GNN 原理解析》，刘忠雨，李彦霖，周洋编著，机械工业出版社，2020"]]
        }]
    },
        {
            title: '课程大纲',
            navTitle: '课程大纲', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
            textItems: [{
                title: "课程PPT将在授课后一天更新"
            }],
            tableData: { // 删除该字段，则不显示表格
                heads: ['时间', '课程内容', '课程概述', '课程PPT'],
                rows: [['2024-11-5', '图神经网络简介', '课程介绍、认识图数据；介绍节点表征学习的方法，包括基于矩阵分解和基于随机游走', '<a href="./resources/GNNCourse_1_2024.pdf" target="_blank">Lecture 1.pdf</a>'],
                    ['2024-11-12', '经典图神经网络', '介绍基于深度自编码器的节点表征学习、融合节点属性的节点表征学习、基于消息传递的节点表征学习', '<a href="./resources/GNNCourse_2_2024.pdf" target="_blank">Lecture 2.pdf</a>'],
                    ['2024-11-19', '卷积图神经网络', '介绍卷积、傅里叶变换、图傅里叶变换和卷积图神经网络示例', '<a href="./resources/GNNCourse_3_2024.pdf" target="_blank">Lecture 3.pdf</a>'],
                    ['2024-11-26', '富信息图神经网络', '介绍有向图、异构图和动态图的图神经网络技术', '<a href="./resources/GNNCourse_4_2024.pdf" target="_blank">Lecture 4.pdf</a>'],
                    ['2024-12-3', '图结构学习神经网络', '介绍图结构学习神经网络、图结构生成网络', '<a href="./resources/GNNCourse_5_2024.pdf" target="_blank">Lecture 5.pdf</a>'],
                    ['2024-12-10', '深度社区发现', '介绍图神经网络应用于社区发现任务的思路、案例', '<a href="./resources/GNNCourse_6_2024.pdf" target="_blank">Lecture 6.pdf</a>'],
                    ['2024-12-17', '图异常检测', '介绍图神经网络在图异常检测上的应用', '<a href="./resources/GNNCourse_7_2024.pdf" target="_blank">Lecture 7.pdf</a>'],
                    ['2024-12-24', '图神经网络探索', '【NEW】Graph Foundation Model', '']]
            }
        },
       {
            title: '常见问题',
            navTitle: "FAQ",
            textItems: [{
                contents: ["**Q**：本课程的考核形式是什么?",
                    "**A**：期末提交一份综述或实验报告",
                    "**Q**：本课程如何考勤？",
                    "**A**：本课程不单独设置考勤，以期末报告为准",
                    "**Q**：课程是否安排答疑？",
                    "**A**：老师和助教将在钉钉群内答疑"
                ]
            }],
        }]
}


window.userData['data-mining-2025'] = {
    courseTitle: "数据挖掘与应用",
    courseSubTitle: "Data Mining and Application<br> （2025 秋）",
    courseIntroduction: "随着信息技术的快速发展，人类生产生活中产生了海量的数据。分析和挖掘数据中的潜在模式以及客观规律，对于提升生活质量，生产效率具有重要的意义。\n" +
        "本课程主要讲述数据挖掘相关的基本概念，经典任务，前沿技术以及在实际生产生活中的应用。学习本课程有望在掌握数据挖掘相关知识的同时也培养相关的实践动手能力。",
    notifications: [
        // {
        //     content: '[2024.09.10] 接学院通知，原“本科生院 研究生院关于2024年中秋节、国庆节、秋季校运动会期间教学安排的温馨提醒”中的9月21日（周六）补9月17日（周二）课调整为9月28日（周六）补9月17日（周二）课，其余安排不变。',
        //     level: 'danger'
        // },
        {
            content: '[2025.09.09] 2025-2026秋学期选课已经开始，欢迎大家选择本课程。',
            level: 'info'
        }
        // , {
        //     content: '课程通知内容',
        //     level: 'warning'
        // }, {
        //     content: '课程通知内容',
        //     level: 'success'
        // }, 
        
    ],
    themeColor: '#337ab7',
    avatarGroup: [{
        groupName: "任课老师",
        members: [{
            url: './resources/zhousheng.png',
            name: '[周晟](https://zhoushengisnoob.github.io/)'
        }]
    }, {
        groupName: "助教",
        members: [{
            url: './resources/zhuonan.jpg',
            name: '[郑卓男](https://github.com/zfx233)'
        },  {
            url: './resources/xhj.jpg',
            name: '[徐鸿嘉](https://github.com/Frostland12138)'
        }]
    },
    ],
    sections: [{
        title: '课程信息',
        navTitle: '课程信息', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
        textItems: [{
            title: '准备知识',
            contents: ["选择此课程的同学建议具备以下知识：",
                ["1. 计算机科学与技术基础知识", "2. 线性代数基础", "3. 概率论基础", "4. Python / Matlab 基础代码能力"],
                "课程第一周将详细介绍具体的准备知识要求"]
        }, {
            title: '参考书目',
            contents: [["1.《数据挖掘概念与技术》，机械工业出版社，2012", "2. 《统计学习方法》，清华大学出版社，2019", "3. 《数据可视化》，陈为等著，电子工业出版社，2019", "4. 《大数据平台异常检测分析的若干关键技术研究》，肖如良编著，电子工业出版社，2020",
                "5. 《深入浅出图神经网络:GNN 原理解析》，刘忠雨，李彦霖，周洋编著，机械工业出版社，2020"]]
        }]
    },
        {
            title: '课程大纲',
            navTitle: '课程大纲', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
            textItems: [{
                title: "课程PPT将在授课后一天更新"
            }],
            tableData: { // 删除该字段，则不显示表格
                heads: ['时间', '课程内容', '课程概述', '课程PPT'],
                rows: [['2025-09-16', '课程简介', '介绍课程的主要内容，形式。介绍数据采集与数据预处理技术，包括数据清洗，归约与变换,介绍数据为中心的人工智能',
                '<a href="./resources/DMCourse_1_2025.pdf" target="_blank">Lecture 1.pdf</a>'
            ],
                    ['2025-09-23', '数据分类技术', '介绍常见的数据分类技术和回归任务，包括决策树、线性回归、线性判别、集成学习',
                    '<a href="./resources/DMCourse_2_2025.pdf" target="_blank">Lecture 2.pdf</a>'
                ],
                    ['2025-09-28', '数据聚类技术', '介绍常见的聚类检测技术和指标，包括Kmeans改进版、谱聚类、层次聚类、高斯混合模型聚类、DBSCAN聚类等技术', 
                    ''
                ],
                    ['2025-09-30', '深度聚类技术', '介绍常见的深度聚类技术，如嵌入式聚类系列、对比聚类系列、伪标签系列等，以及基于聚类的表征学习和其他数据类型的聚类。',
                    ''
                ],
                    ['2025-10-14', '异常检测技术', '介绍常见的异常检测技术和部分深度异常检测技术',
                    ''
                ],
                    ['2025-10-21', '深度异常检测技术', '介绍常见的深度异常检测技术，如深度特征提取、基于特征提取的异常性判断、面向异常检测的特征学习、端到端异常检测模型等。',' ', 
                    ''
                ],
                ['2025-10-28', '数据分类技术2', '【New】深度分类模型，不平衡分类问题',
                    ''
                ]
            ]
            }
        },
        {
            title: '常见问题',
            navTitle: "FAQ",
            textItems: [{
                contents: ["**Q**：本课程的考核形式是什么?",
                    "**A**：期末实验报告",
                    "**Q**：本课程如何考勤？",
                    "**A**：本课程不单独设置考勤，以随堂测试为准",
                    "**Q**：课程是否安排答疑？",
                    "**A**：老师和助教将在钉钉群内答疑"
                ]
            }],
        }]
}