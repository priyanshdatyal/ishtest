var val = 1;

function curTrigger() {
    if (val == 1) {
        val = 2;
        document.getElementById('curtainn').src = "/static/res/assets/curtainO.png";
    } else {
        document.getElementById('curtainn').src = "/static/res/assets/curtainC.png";
        val = 1;
    }
};