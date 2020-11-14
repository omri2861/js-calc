/*
 * Welomce :)
 * This is the code implementation for the calc/eval exercise, in a web application.
 * Enjoy !
 */

const operators = ['+', '-', '%', '×', '÷'];
const digits = "1234567890";

function calculatorPress(button) {
    let command = button.target.textContent;
    console.log(digits.includes(command));
}

$(".calc-button").on("click", calculatorPress);
