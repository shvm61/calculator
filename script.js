var buttons = document.getElementsByClassName("button");
var display = document.getElementById("show");

var oper1 = null;
var oper2 = null;
var operator = null;

function isOperator(value) {
  return value === "+" || value === "-" || value === "*" || value === "/";
}
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    var value = this.getAttribute("data-value");
    var text = display.textContent.trim();

    if (isOperator(value)) {
      operator = value;
      operand1 = parseFloat(text);
      display.textContent = "";
    } else if (value === "clear") {
      display.textContent = "";
    } else if (value === "sign") {
      operand1 = parseFloat(text);
      operand1 = -1 * operand1;
      display.textContent = operand1;
    } else if (value === "dec") {
      if (text.length && !text.includes(".")) {
        display.textContent = text + ".";
      }
    } else if (value === "per") {
      operand1 = parseFloat(text);
      operand1 = operand1 / 100;
      display.textContent = operand1;
    } else if (value === "equal") {
      operand2 = parseFloat(text);
      var result = eval(operand1 + " " + operator + " " + operand2);
      if (result) {
        display.textContent = result;
        operand1 = result;
        operand2 = null;
        operator = null;
      }
    } else {
      display.textContent += value;
    }
  });
}
