function square(e) {
    var x = Math.random() * e.scrollWidth;
    var y = Math.random() * e.scrollHeight;
    var width = Math.random() * (e.scrollWidth - x);
    var height = Math.random() * (e.scrollHeight - y);
    var square = document.createElement("div");
    square.className = "square";
    square.style.left = toPx(x);
    square.style.top = toPx(y);
    square.style.width = toPx(width);
    square.style.height = toPx(height);
    square.style.zIndex =
        Math.floor(e.scrollWidth * e.scrollHeight - width * height).toString();
    return square;
}
function toPx(n) {
    return Math.floor(n) + "px";
}
function randomColor() {
    var rand = function () { return Math.floor(Math.random() * 255).toString(); };
    return "rgb(" + rand() + ", " + rand() + ", " + rand() + ")";
}
