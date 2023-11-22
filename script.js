// Assignments
const OPERATORS = ["+", "-", "/", "x"];
let history = [];
let numA;
let numB;
let operator;
let input;
let equals = false;
let concatInput = 0;

const buttonsDiv = document.querySelector(".buttons");
const answerP = document.querySelector(".answer");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");

// Functions
const add = (numA, numB) => numA + numB;
const subtract = (numA, numB) => numA - numB;
const multiply = (numA, numB) => numA * numB;

const divide = (numA, numB) => {
	if (numB == 0) return "div0err";
	return numA / numB.toFixed(4);
};

const display = (input) => (answerP.textContent = input);
const isOperator = (input) => OPERATORS.includes(input);

function operate() {
	numB = concatInput;
	numA = calculate();
	display(numA);
	if (!Number.isInteger(numA)) {
		// Display zero division error
		reset(numA);
	}
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

function reset(message) {
	history = [];
	[numA, numB] = [null, null];
	input = 0;
	concatInput = 0;
	equals = false;
	operator = null;
	display(message);
}

// Event listeners
clearBtn.addEventListener("click", () => reset(0));

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
