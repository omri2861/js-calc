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
    expression += currentNumber + command;
    currentNumber = "0";
    $("#expression").text(expression);
  }

  $("#calc-screen").text(currentNumber);
}

$(".calc-button").on("click", calculatorPress);
