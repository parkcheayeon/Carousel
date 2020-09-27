const wrap = document.querySelector(".wrap");
const btn = wrap.querySelector("button");
const colorDisPlay = wrap.querySelector("h1");
const body = document.querySelector("body");

function randomNumber() {
    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let number = "";
    for (let i = 0; i < 6; i++) {
        number += list[Math.floor(Math.random() * list.length)];
    }
    return number;
}

function changeClick() {
    const number = randomNumber();
    colorDisPlay.innerText = `HEX COLOR :#${number}`;
    body.style.backgroundColor = `#${number}`;
}

function init() {
    btn.addEventListener("click", changeClick);
}
init();