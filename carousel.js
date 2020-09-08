const form = document.querySelector(".js-form");
const back = form.querySelector(".js-back");
const next = form.querySelector(".js-next");
const dotForm = document.querySelector(".dot-form");
const dot = dotForm.querySelector(".dot");
const change = document.getElementById("change");

let num = 1;

function dotClick(event) {
    // KEN: JSON.parse가 필요없는 상황인 것 같은데, 확인해보시고 JSON.parse가 무슨 용도인지 조사해보고 넘어가세요.
    // const dotId = event.target.getAttribute('id');
    // if (dotId !== null) {
    // change.src = `images/${dotId}.png`;
    // num = JSON.parse(dotId);
    // }
    const dotId = event.target.id;
    if (dotId !== '') {
        change.src = `images/${dotId}.png`;
        num = JSON.parse(dotId);
    }
}

function backClick() {
    num -= 1;
    if (num === 0) {
        num = 5;
    }
    change.src = `images/${num}.png`;
}

function nextClick() {
    num += 1;
    if (num === 6) {
        num = 1;
    }
    change.src = `images/${num}.png`;
}

function init() {
    change.src = `images/${num}.png`;
    back.addEventListener("click", backClick);
    next.addEventListener("click", nextClick);
    dotForm.addEventListener("click", dotClick);
}
init();
