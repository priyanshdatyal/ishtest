var val = 0;
var bor = getComputedStyle(document.body).getPropertyValue('--abt-door-border');
var bornot = getComputedStyle(document.body).getPropertyValue('--abt-door-border-not');

function doorTrigger() {
    var col = getComputedStyle(document.body).getPropertyValue('--main-color');
    if (val == 0) {
        val = 1;
        document.getElementById('doorimg').src = "/static/res/assets/doorClose.png";
        document.getElementById('doorcon').style.border = " 15px solid rgb(75, 44, 25)";
        document.getElementById('fullroom').style.backgroundColor = "rgb(" + col + ")";
        document.getElementById('fullroom').style.display = "block";
        document.getElementById('abtstuff').style.transform = "scale(0.70)";
    } else {
        val = 0;
        document.getElementById('doorimg').src = "/static/res/assets/doorOp.png";
        document.getElementById('fullroom').style.backgroundColor = "transparent";
        document.getElementById('fullroom').style.display = "none";
        document.getElementById('doorcon').style.border = " 0px solid rgb(75, 44, 25)";
        document.getElementById('doorcon').style.borderRight = " 15px solid rgb(75, 44, 25)";
        document.getElementById('abtstuff').style.transform = "scale(1.0)";
    }
};