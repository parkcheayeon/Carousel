const back = document.querySelector(".back");
const next = document.querySelector(".next");
const image = document.querySelector(".image");
const dotWarp = document.querySelector(".dot-wrap");
const dots = dotWarp.querySelectorAll(".dot");

const ClICKED = "clicked";

let num = 1;

function dotRemove(number) {
    dots[number].classList.remove(ClICKED);
}

function dotAdd(number) {
    dots[number - 1].classList.add(ClICKED);
}

function dotClick(event) {
    const dotId = Number(event.target.id);
    if (dotId !== 0) {
        dotRemove(num - 1);
        num = dotId;
        image.setAttribute("src", `images/${num}.png`);
        dotAdd(num);
    }
}

function backClick() {
    num--;
    if (num === 0) {
        dotRemove(num);
        num = 5;
    }
    image.setAttribute("src", `images/${num}.png`);
    dotAdd(num);
    dotRemove(num);
}

function nextClick() {
    num++;
    if (num === 6) {
        dotRemove(num - 2);
        num = 1;
    }
    image.setAttribute("src", `images/${num}.png`)
    dotAdd(num);
    dotRemove(num - 2);
}

function init() {
    dotAdd(num);
    next.addEventListener("click", nextClick);
    back.addEventListener("click", backClick);
    dotWarp.addEventListener("click", dotClick);
}
init();