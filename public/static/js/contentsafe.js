document.onkeydown = function(e) {
    if (e.ctrlKey &&
        (e.keyCode === 67 ||
            e.keyCode === 86 ||
            e.keyCode === 85 ||
            e.keyCode === 117 ||
            e.keyCode === 83)) {
        return false;
    }
    if (e.keyCode == 123) {
        return false;
    }
    if (e.keyCode == 122) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        return false;
    }

    if (e.ctrlKey && e.keyCode == 85) {
        return false;
    }
    if (e.shiftKey &&
        (e.keyCode === 67 ||
            e.keyCode === 86 ||
            e.keyCode === 85 ||
            e.keyCode === 117 ||
            e.keyCode === 73 ||
            e.keyCode === 83)) {
        return false;
    } else {
        return true;
    }
};

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});