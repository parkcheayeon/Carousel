const form = document.querySelector(".js-form");
const back = form.querySelector(".js-back");
const next = form.querySelector(".js-next");
const dotForm = document.querySelector(".dot-form");
const dot = dotForm.querySelector(".dot");
const change = document.getElementById("change");

let num = 1;

function dotClick(event) {
    // KEN: JSON.parse가 필요없는 상황인 것 같은데, 확인해보시고 JSON.parse가 무슨 용도인지 조사해보고 넘어가세요.
    // 원래는 JSON.parse를 빼고 했었는데 Dot을 클릭한후 화살표를 누르면 이미지가 나오지 않거나 Dot 사이에 공백도 클릭이 되더라구요 그래서 니꼴라스강의에서 event.target.parentNode값이 스트링으로 나오길래 한번 JSON.parse를 사용해봤습니다. 다른방법이 있을까요??
    const dotId = event.target.id;
    change.src = `images/${dotId}.png`;
    num = dotId;
}

function backClick() {
    if (num > 1) {
        num -= 1;
    // KEN: 아래 조건은 아마 의도하신 내용이 아닐 것 같습니다.
    // 만약 현재 num이 1일경우 화살표 클릭시 5번이미지로 이동하게끔 설정했는데 아닌가요??
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
