// Arithmetic functions
const add = (x, y) => {
    return x + y;
}

const subtract = (x, y) => {
    return x - y;
}

const multiply = (x, y) => {
    return x * y;
}

const divide = (x, y) => {
    return x / y;
}

const operate = (firstNum, operator, secondNum) => {
    if (operator === "+") return add(firstNum, secondNum);
    if (operator === "-") return subtract(firstNum, secondNum);
    if (operator === "*") return multiply(firstNum, secondNum);
    if (operator === "/") return divide(firstNum, secondNum);
}


// Global Vars
const display = document.querySelector(".display");
let firstNum = "";
let operator = "";
let secondNum = "";
// Each will be bool vals
let firstNumNegative;
let secondNumNegative;

const handleNumClick = (value) => {
    if (operator === "") {
        appendToDisplay(value);
        firstNum += value;
    }
    else {
        secondNum += value;
        replaceDisplay(secondNum);
    }
}

const handleOpClick = (op) => {
    operator = op;
    // Check if we should use the display value
    if (firstNum === "") firstNum = display.value;
}

const appendToDisplay = (numAsStr) => {
    display.value += numAsStr;
}

const replaceDisplay = (value) => {
    display.value = value;
}

const clearValues = () => {
    firstNum = "";
    operator = "";
    secondNum = "";
}

const clearDisplay = () => {
    display.value = "0";
}

const handleEqualClick = () => {
    if (operator === "/" && secondNum === "0") {
        replaceDisplay("Don't divide by 0 plzz");
        return;
    }
    let output = operate(parseInt(firstNum), operator, parseInt(secondNum));
    replaceDisplay(output);
    clearValues();
}

const negativeToggle = () => {
    if (operator === "") {
        console.log("Make the first number negative");
        firstNum = "-" + firstNum;
        replaceDisplay(firstNum);
    } else if (operator !== "") {
        console.log("Make the second number negative");
        secondNum = "-" + secondNum;
        replaceDisplay(secondNum);
    }
}