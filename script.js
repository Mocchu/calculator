const OPERATORS = ["+", "-", "/", "x"];
let history = [];
let numA;
let numB;
let operator;
let ans;

const buttonsDiv = document.querySelector(".buttons");
const answerP = document.querySelector(".answer");
const equalsBut = document.querySelector(".equals");
const clearBut = document.querySelector(".clear");

const add = (numA, numB) => numA + numB;
const subtract = (numA, numB) => numA - numB;
const divide = (numA, numB) => numA / numB;
const multiply = (numA, numB) => numA * numB;

const display = (input) => (answerP.textContent = input);
const isOperator = (input) => OPERATORS.includes(input);

buttonsDiv.addEventListener("click", (e) => {
	// Create and display numbers based on user input via concatenation
	input = e.target.textContent;
	if (Number.isInteger(Number(input))) {
		history.push(input);
		concatInput = history.join("");
		display(concatInput);
	} else if (isOperator(input)) {
		history = [];
		if (!numA) numA = Number(concatInput);
		operator = input;
	}
});

equalsBut.addEventListener("click", () => {
	// Calculate when equals button is pressed
	numB = Number(concatInput);
	ans = calculate(operator, numA, numB);
	display(ans);
	numA = ans;
});

clearBut.addEventListener("click", () => {
	// Clear display and reset variables
	history = [];
	[numA, numB] = [null, null];
	display("0");
});

function calculate(operator, numA, numB) {
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
