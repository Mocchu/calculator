const OPERATORS = ["+", "-", "/", "x"];
let history = [];
let numA;
let numB;
let operator;

const buttonsDiv = document.querySelector(".buttons");
const answerP = document.querySelector(".answer");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");

const add = (numA, numB) => numA + numB;
const subtract = (numA, numB) => numA - numB;
const divide = (numA, numB) => (numA / numB).toFixed(2);
const multiply = (numA, numB) => numA * numB;

const display = (input) => (answerP.textContent = input);
const isOperator = (input) => OPERATORS.includes(input);

function operate() {
	numB = concatInput;
	numA = calculate();
	display(numA);
}

function calculate() {
	switch (operator) {
		case "+":
			return add(numA, numB);
		case "-":
			return subtract(numA, numB);
		case "x":
			return multiply(numA, numB);
		case "/":
			return divide(numA, numB);
	}
}

equalsBtn.addEventListener("click", () => {
	operate();
	operator = input;
});

buttonsDiv.addEventListener("click", (e) => {
	input = e.target.textContent;
	if (Number.isInteger(Number(input))) {
		history.push(input);
		concatInput = Number(history.join(""));
		display(concatInput);
	} else if (isOperator(input)) {
		history = [];

		if (!numA) {
			numA = concatInput;
		} else {
			operate();
		}
		operator = input;
	}
});

clearBtn.addEventListener("click", () => {
	history = [];
	[numA, numB] = [null, null];
	display("0");
});
