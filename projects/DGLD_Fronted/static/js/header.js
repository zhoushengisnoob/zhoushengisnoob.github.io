var text = String.raw`
<nav class="navbar navbar-expand-lg fixed-top sticky" id="navbar">
<div class="container-fluid custom-container">
    <div>
        <a class="navbar-brand logo text-uppercase" href="javascript:;">
            <img src="static/image/DGLD_logo.jpg" class="logo-light" alt="" height="60">
            <!-- <p>Eagle Lab</p> -->
            <!-- <img src="images/logo-light.png" class="logo-dark" alt="" height="28"> -->
        </a>
        <!-- <a class="lab-project-name">
            DGLD
        </a>-->
    </div>


    <button class="navbar-toggler me-3 order-2 ms-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-label="Toggle navigation">
        <i class="mdi mdi-menu"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mx-auto navbar-center" id="nav-total">
            <li class="nav-item active">
                <a href="./index.html" class="nav-link">Home</a>
            </li>
            <li class="nav-item dropdown dropdown-hover">
                <a href="./getstarted.html" class="nav-link ">Get Started</a>
            </li>
            <li class="nav-item dropdown dropdown-hover">
                <a href="./leaderboard.html" class="nav-link ">Leaderboard</a>
            </li>
            <li class="nav-item dropdown dropdown-hover">
                <a href="../../DGLD/doc/docstring_html/html/dgld.html" target="_blank" class="nav-link ">Docs</a>
            </li>
            <li class="nav-item">
                <a href="https://github.com/EagleLab-ZJU/DGLD" target="_blank" class="nav-link">Github</a>
            </li>
            
        </ul>
        <!--end navbar-nav-->
    </div>

</div>
<!--end container-->
</nav>`
document.getElementById("header").innerHTML += text
var h  = document.getElementById("navbar").offsetHeight
// var body = document.body.setAttribute("style","padding-top: " + h + 'px;width: ' + w + 'px')
var body = document.body.setAttribute("style","padding-top: " + h + 'px')

