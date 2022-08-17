var text2 = String.raw`
<nav class="navbar navbar-expand-lg" style="background-color: #f5f7fa !important; " id="footer-navbar">
<div class="container-fluid custom-container">
    <div class="container text-center">
        <div class="row">
            <div class="col footer-team">
                <h1>DGLD TEAM</h1>
            </div>
        </div>
        <div class="row">
            <div class="col footer-school">
                Zhejiang University
            </div>
        </div>
        <div class="row">
            <div class="col footer-name">
                Sheng Zhou, Peng Zhang, Gaoming Yang, Mengcheng Fang, Jinke Shi, Hui Zhan, Chenyu Lai, Zeyu Fang, Yilun Xu, Zinan Guo, Rongxiu Gao, Haishuai Wang, Jiajun Bu
            </div>
        </div>
        <div class="row">
            <div class="col copy-right mb-5 text-center text-muted">
                Copyright© 2020-2022 ZJU EagleLab All Rights Reserved
            </div>
        </div>
    </div>
</div>
</nav>`
document.getElementById("footer").innerHTML += text2

window.onload = function() {
    var w = document.getElementById("navbar").offsetWidth
    console.log(w)
    document.getElementById("footer-navbar").style.width = w + 'px'
}

