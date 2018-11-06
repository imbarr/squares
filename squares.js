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
function move(e, dx, dy) {
    e.style.left = toPx(fromPx(e.style.left) + dx);
    e.style.top = toPx(fromPx(e.style.top) + dy);
    return e;
}
// function fly(e: HTMLElement, vx: number, vy: number, interval: number): HTMLElement {
//     setInterval(() => {
//
//     });
//     return e;
// }
function toPx(n) {
    return (n > 0 ? Math.floor(n): Math.ceil(n)) + "px";
}
function fromPx(s) {
    return parseInt(s.substring(0, s.length - 2));
}
function randomColor() {
    var rand = function () { return Math.floor(Math.random() * 255).toString(); };
    return "rgb(" + rand() + ", " + rand() + ", " + rand() + ")";
}
