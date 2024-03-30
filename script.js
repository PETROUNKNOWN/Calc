const buttonMinus = document.getElementById("buttonMinus");
const buttonPlus = document.getElementById("buttonPlus");
const buttonEquals = document.getElementById("buttonEquals");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById('button3');
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const buttonDivide = document.getElementById("buttonDivide");
const button0 = document.getElementById("button0");
const buttonMultiply = document.getElementById("buttonMultiply");
const clear = document.getElementById("clear");

const display = document.getElementById('display');


function btn1() {
    display.insertAdjacentText("beforeend", `1`);
}

function btn2() {
    display.insertAdjacentText("beforeend", `2`);
}

function btn3() {
    display.insertAdjacentText("beforeend", `3`);
}

function btn4() {
    display.insertAdjacentText("beforeend", `4`);
}
function btn5() {
    display.insertAdjacentText("beforeend", `5`);
}

function btn6() {
    display.insertAdjacentText("beforeend", `6`);
}
function btn7() {
    display.insertAdjacentText("beforeend", `7`);
}

function btn8() {
    display.insertAdjacentText("beforeend", `8`);
}
function btn9() {
    display.insertAdjacentText("beforeend", `9`);
}

function btn0() {
    display.insertAdjacentText("beforeend", `0`);
}

function btnPlus() {
    display.insertAdjacentText("beforeend", `+`);
}

function btnMinus() {
    display.insertAdjacentText("beforeend", `-`);
}

function btnDivide() {
    display.insertAdjacentText("beforeend", `/`);
}

function btnMultiply() {
    display.insertAdjacentText("beforeend", `x`);
}

function btnEquals() {
    let Equals = display.innerText;
    console.log(Equals[0]);
}

function btnClear() {
    display.innerText = '';
}



button1.addEventListener('click', btn1);
button2.addEventListener('click', btn2);
button3.addEventListener('click', btn3);
button4.addEventListener('click', btn4);
button5.addEventListener('click', btn5);
button6.addEventListener('click', btn6);
button7.addEventListener('click', btn7);
button8.addEventListener('click', btn8);
button9.addEventListener('click', btn9);
button0.addEventListener('click', btn0);
buttonPlus.addEventListener('click', btnPlus);
buttonMinus.addEventListener('click', btnMinus);
buttonDivide.addEventListener('click', btnDivide);
buttonMultiply.addEventListener('click', btnMultiply);
buttonEquals.addEventListener('click', btnEquals);
clear.addEventListener('click', btnClear);