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
  }
  else if (command === "=") {
      expression += currentNumber;
      $("#expression").text(expression);
      console.log(evaluateExpression(expression));
  }

  $("#calc-screen").text(currentNumber);
}

class BinaryOperator {
  constructor(operator, level, evaluate) {
    this.operator = operator;
    this.level = level;
    this.evaluate = evaluate;
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

function evaluateExpression(expression) { 
    elements = expression.split(" ");
    evaluated = [];
    for (i = 1; i < elements.length; i++) {
        console.log(i);
    }
    return elements.length;
}

$(".calc-button").on("click", calculatorPress);
