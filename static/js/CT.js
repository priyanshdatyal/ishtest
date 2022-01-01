var daynight = 0;

function themeChanger() {
    document.body.classList.toggle("light");
    if (daynight == 0) {
        daynight = 1;
        document.getElementById('winim').src = "/static/res/images/moon.gif";
    } else {
        daynight = 0;
        document.getElementById('winim').src = "/static/res/images/sun.gif";
    }
}