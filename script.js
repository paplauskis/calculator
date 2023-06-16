let displayValue = ''
let storedNumber = ''
let firstNumber = ''
let secondNumber = ''
let storedOperator = ''
const display = document.querySelector('.screen')
const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', clear)

const calculator = (() => {
  const add = (a, b) => a + b
  const subtract = (a, b) => a - b
  const multiply = (a, b) => a * b
  const divide = (a, b) => (b === 0 ? "Can't divide by 0!" : a / b)

  return {
    add,
    subtract,
    multiply,
    divide,
  }
})()

const operate = function (operator, num1, num2) {
  if (operator === '+') return calculator.add(num1, num2)
  if (operator === '-') return calculator.subtract(num1, num2)
  if (operator === '*') return calculator.multiply(num1, num2)
  if (operator === '/') {
    if (num2 === 0) return 'ERROR'
    return calculator.divide(num1, num2)
  }
  return 'Error: invalid operator!'
}

function appendNumber(num) {
  displayValue += num
  display.textContent = displayValue
}

function clear() {
  displayValue = ''
  display.textContent = '0'
  storedNumber = ''
  firstNumber = ''
  secondNumber = ''
  storedOperator = ''
}

const numberBtn = document.querySelectorAll('.number')
numberBtn.forEach((number) => {
  number.addEventListener('click', () => {
    if (storedOperator === '') {
      firstNumber += number.value
      firstNumber *= 1
    } else {
      secondNumber += number.value
      secondNumber *= 1
    }
    appendNumber(number.textContent)
  })
})

const operatorBtn = document.querySelectorAll('.operator')
operatorBtn.forEach((operator) => {
  operator.addEventListener('click', () => {
    if (storedOperator === '') {
      storedNumber = firstNumber
    } else {
      storedNumber = operate(storedOperator, firstNumber, secondNumber)
      firstNumber = storedNumber
      secondNumber = ''
      displayValue = firstNumber.toString()
      display.textContent = displayValue
    }
    storedOperator = operator.value
    displayValue = operator.textContent
  })
})

const equalBtn = document.querySelector('.equal')
equalBtn.addEventListener('click', equal)

function equal() {
  firstNumber = display.textContent = operate(
    storedOperator,
    storedNumber,
    secondNumber
  )
  secondNumber = ''
  storedNumber = ''
  storedOperator = ''
}
