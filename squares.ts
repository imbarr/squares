function square(e: Element): Element {
    let x = Math.random() * e.scrollWidth;
    let y = Math.random() * e.scrollHeight;
    let width = Math.random() * (e.scrollWidth - x);
    let height = Math.random() * (e.scrollHeight - y);
    let square = document.createElement("div");
    square.className = "square";
    square.style.left = toPx(x);
    square.style.top = toPx(y);
    square.style.width = toPx(width);
    square.style.height = toPx(height);
    square.style.zIndex =
        Math.floor(e.scrollWidth * e.scrollHeight - width * height).toString();
    return square;
}

function toPx(n: number): string {
    return Math.floor(n) + "px"
}

function randomColor(): string {
    let rand = () => Math.floor(Math.random() * 255).toString();
    return "rgb(" + rand() + ", " +  rand() + ", " +  rand() + ")";
}