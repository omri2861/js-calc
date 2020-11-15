/*
 * Welomce :)
 * This is the code implementation for the calc/eval exercise, in a web application.
 * Enjoy !
 */

const OPERATORS = ["+", "-", "%", "×", "÷"];
const DIGITS = "1234567890";
var currentNumber = "";
var expression = "";

function calculatorPress(button) {
  let command = button.target.textContent;
  if (DIGITS.includes(command)) {
    if (currentNumber === "0") {
      currentNumber = command;
    } else {
      currentNumber += command;
    }
  } else if (OPERATORS.includes(command)) {
    expression += currentNumber + " " + command + " ";
    currentNumber = "0";
    $("#expression").text(expression);
  } else if (command === "=") {
    expression += currentNumber;
    $("#expression").text(expression);
    console.log(evaluateExpression(expression));
  }

  $("#calc-screen").text(currentNumber);
}

class BinaryOperator {
  constructor(symbol, level, calculate) {
    this.symbol = symbol;
    this.level = level;
    this.calculate = calculate;
  }
}

var operators = [
  new BinaryOperator("+", 1, function (a, b) {
    return a + b;
  }),
  new BinaryOperator("-", 1, function (a, b) {
    return a - b;
  }),
];

function isElementOperator(element) {
  for (let i = 0; i < operators.length; i++) {
    if (element === operators[i].symbol) {
      return true;
    }
  }

  return false;
}

function getOperatorBySymbol(symbol) {
  for (let i = 0; i < operators.length; i++) {
    if (symbol === operators[i].symbol) {
      return operators[i];
    }
  }
  throw "Couldn't find operator: " + symbol;
}

function evaluateExpression(expression) {
  let elements = expression.split(" ");
  // Tokenize the expression:
  for (let i = 0; i < elements.length; i++) {
    let number = parseFloat(elements[i]);
    if (!isNaN(number)) {
      elements[i] = number;
    }
  }

  for (let i = 1; i < elements.length - 1; i++) {
    if (isElementOperator(elements[i])) {
      let operator = getOperatorBySymbol(elements[i]);

      let result = operator.calculate(elements[i - 1], elements[i + 1]);

      elements.splice(i - 1, 3, result);
    }
  }
  return elements;
}

$(".calc-button").on("click", calculatorPress);
