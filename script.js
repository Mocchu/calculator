const OPERATORS = ["+", "-", "/", "x"];
let history = [];
let numA;
let numB;
let operator;
let input;
let equals = false;

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
	console.log(numA + " " + operator + " " + numB);
	numA = calculate();
	display(numA);
	console.log(numA);
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
	equals = true;
	operate();
});

buttonsDiv.addEventListener("click", (e) => {
	input = e.target.textContent;
	if (Number.isInteger(Number(input))) {
		// User selected integer button
		history.push(input);
		concatInput = Number(history.join(""));
		display(concatInput);
	} else if (isOperator(input)) {
		// User selected integer button
		if (!numA) numA = concatInput;
		else if (equals) equals = false;
		else operate();

		history = [];
		operator = input;
	}
});

clearBtn.addEventListener("click", () => {
	history = [];
	[numA, numB] = [null, null];
	equals = false;
	display("0");
});
