// ----- Basic arithmetic functions -----
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
  if (b === 0) {
    return "Error: cannot divide by zero";
  }
  return a / b;
}

// ----- Decide which function to call using switch -----
function calculate(operation, a, b) {
  switch (operation) {
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
    default:
      return "Invalid operation";
  }
}

// ----- Connect the page to the functions -----
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultBox = document.getElementById("result");

document.querySelectorAll("button[data-op]").forEach(function (button) {
  button.addEventListener("click", function () {
    const a = parseFloat(num1Input.value);
    const b = parseFloat(num2Input.value);

    if (isNaN(a) || isNaN(b)) {
      resultBox.textContent = "Please enter both numbers";
      resultBox.className = "result error";
      return;
    }

    const answer = calculate(button.dataset.op, a, b);
    resultBox.textContent = "Result: " + answer;
    resultBox.className =
      typeof answer === "string" ? "result error" : "result";
  });
});
