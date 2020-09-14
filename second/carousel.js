const form = document.querySelector(".js-form");
const back = form.querySelector(".back");
const next = form.querySelector(".next");
const image = form.querySelector("#image")
const dotForm = document.querySelector(".dot-wrap");

let num = 1;

function dotClick(event) {
    const dotId = event.target.id;
    if (dotId !== "") {
        num = Number(dotId);
        image.src = `images/${num}.png`;
    }
}

function backClick() {
    num -= 1;
    if(num === 0) {
        num = 5;
    }
    image.src = `images/${num}.png`;
}

function nextClick() {
    num += 1;
    if(num === 6) {
        num = 1;
    }
    image.src = `images/${num}.png`;
}

function init() {
    image.src = `images/${num}.png`;
    next.addEventListener("click", nextClick);
    back.addEventListener("click", backClick);
    dotForm.addEventListener("click", dotClick);
}
init();