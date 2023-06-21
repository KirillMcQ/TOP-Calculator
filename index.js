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

// Variables needed for calculations; will be user inputted
let firstNum = "";
let operator = "";
let secondNum = "";

const operate = (firstNum, operator, secondNum) => {
    if (operator === "+") return add(firstNum, secondNum);
    if (operator === "-") return subtract(firstNum, secondNum);
    if (operator === "*") return multiply(firstNum, secondNum);
    if (operator === "/") return divide(firstNum, secondNum);
}