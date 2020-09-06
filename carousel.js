
const form = document.querySelector(".js-form"),
    back = form.querySelector(".js-back"),
    next = form.querySelector(".js-next"),
    dotForm = document.querySelector(".dot-form"),
    dot = dotForm.querySelector(".dot");

const change = document.getElementById("change");


let num = 1;


function dotClick(event) {
    const dotId = JSON.parse(event.target.id);
    change.src = `images/${dotId}.png`;
    num = dotId;
}


function backClick() {
    if (num > 1) {
        num -= 1;
    } else if (num = 1) {
        num = 5
    }
    change.src = `images/${num}.png`;
}


function nextClick() {
    if (num < 5) {
        num += 1;
    } else if (num = 5) {
        num = 1;
    }
    change.src = `images/${num}.png`;
}


function init() {
    change.src = `images/${num}.png`
    back.addEventListener("click", backClick);
    next.addEventListener("click", nextClick);
    dotForm.addEventListener("click", dotClick);
}
init();
