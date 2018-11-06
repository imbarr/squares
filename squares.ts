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

function move(e: HTMLElement, dx: number, dy: number): HTMLElement {
    e.style.left = toPx(fromPx(e.style.left) + dx);
    e.style.top = toPx(fromPx(e.style.top) + dy);
    return e;
}

function fly(parent: Element, e: HTMLElement, vx: number, vy: number, interval: number): HTMLElement {
    setInterval(() => {
        let mx = parent.scrollWidth - e.scrollWidth;
        let my = parent.scrollHeight - e.scrollHeight;
        move(e, vx, vy);
        if (fromPx(e.style.left) < 0) {
            e.style.left = toPx(0);
            vx = -vx;
        }
        else if (fromPx(e.style.left) > mx) {
            e.style.left = toPx(mx);
            vx = -vx;
        }
        else if (fromPx(e.style.top) < 0) {
            e.style.top = toPx(0);
            vy = -vy;
        }
        else if (fromPx(e.style.top) > my) {
            e.style.top = toPx(my);
            vy = -vy;
        }
    }, interval);
    return e;
}

function toPx(n: number): string {
    return Math.floor(n) + "px"
}

function fromPx(s: string): number {
    return parseInt(s.substring(0, s.length - 2))
}

function randomColor(): string {
    let rand = () => Math.floor(Math.random() * 255).toString();
    return "rgb(" + rand() + ", " +  rand() + ", " +  rand() + ")";
}