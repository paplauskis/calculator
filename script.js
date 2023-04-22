let displayValue = '';
let storedNumber = '';
let currentNumber = '';
let firstNumber = '';
let secondNumber = '';
let storedOperator = '';
const display = document.querySelector('.screen');
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clear)

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) return 'Can\'t divide with 0!';
    return a / b;
}

const operate = function (operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        if (num2 == 0) {
            return 'ERROR'
        } else return divide(num1, num2);
    } else return "Error: invalid operator!";
}

function appendNumber(num) {
    displayValue += num;
    display.textContent = displayValue;
}

function clear() {
    displayValue = '';
    display.textContent = '0';

}

const numberBtn = document.querySelectorAll('.number');
numberBtn.forEach((number) => {
    number.addEventListener('click', () => {
        if (storedOperator === '') {
            firstNumber += number.value;
            firstNumber = firstNumber * 1;
            // console.log(firstNumber);
        } else {
            secondNumber += number.value;
            secondNumber = secondNumber * 1;
             console.log(secondNumber);
        }
        // storedNumber += number.value;
        // console.log(storedNumber);
        appendNumber(number.textContent);
    });
});

const operatorBtn = document.querySelectorAll('.operator');
operatorBtn.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (storedOperator === '') {
            storedNumber = firstNumber;
            console.log(storedNumber);
        } else {
            storedNumber = operate(storedOperator, firstNumber, secondNumber);
            firstNumber = storedNumber;
            secondNumber = '';
            displayValue = firstNumber.toString();
            display.textContent = displayValue;

        }
        storedOperator = operator.value;
        console.log(operator.value);
        displayValue = operator.textContent;
    });
});

const equalBtn = document.querySelector('.equal');
equalBtn.addEventListener('click', equal)

function equal() {
    // console.log(operate(storedOperator, storedNumber, secondNumber));
    firstNumber = display.textContent = operate(storedOperator, storedNumber, secondNumber);
    secondNumber = '';
    console.log(firstNumber);
}
