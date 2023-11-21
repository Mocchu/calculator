const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;

let numA;
let numB;
let operator;
let ans;
let input = "";

const buttonsDiv = document.querySelector(".buttons");
const answerP = document.querySelector(".answer");

const display = (int) => (answerP.textContent = int);

buttonsDiv.addEventListener("click", (e) => {
	input += e.target.textContent;
	display(input);
});
