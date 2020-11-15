/*
 * Welomce :)
 * This is the code implementation for the calc/eval exercise, in a web application.
 * Enjoy !
 */

const OPERATORS = ["+", "-", "%", "×", "÷"];
const DIGITS = "1234567890";
var currentNumber = "";

function calculatorPress(button) {
  let command = button.target.textContent;
  if (DIGITS.includes(command)) {
    if (currentNumber === "0") {
      currentNumber = command;
    } else {
      currentNumber += command;
    }
  } else {
    currentNumber = "0";
  }

  $("#calc-screen").text(currentNumber);
}

$(".calc-button").on("click", calculatorPress);
