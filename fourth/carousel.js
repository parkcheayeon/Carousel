const next = document.querySelector(".next");
const back = document.querySelector(".back");
const image = document.querySelector("img");
const dots = document.querySelector(".dot-wrap");
const dot = document.getElementsByClassName("dot")

const CLICKED_CN = "clicked"

let num = 1;

function dotClassAdd() {
    dot[num-1].classList.add(CLICKED_CN);
}

function dotClassRemove(number) {
    dot[number].classList.remove(CLICKED_CN);
}

function imageChange() {
    image.setAttribute("src", `images/${num}.png`);
}

function handleDotClick(ev) {
    const dotId = Number(ev.target.id);
    if (dotId !== 0) {
        dotClassRemove(num-1);
        num = dotId;
        imageChange();
        dotClassAdd();
    }
}

function handleBackClick() {
    num--;
    if (num === 0) {
        dotClassRemove(num);
        num = 5;
    }
    imageChange();
    dotClassAdd()
    dotClassRemove(num);
}

function handleNextClick() {
    num++;
    if (num === 6) {
        dotClassRemove(num-2);
        num = 1;
    }
    imageChange();
    dotClassAdd();
    dotClassRemove(num-2);
}

function init() {
    next.addEventListener("click", handleNextClick);
    back.addEventListener("click", handleBackClick);
    dots.addEventListener("click", handleDotClick);
}
init();