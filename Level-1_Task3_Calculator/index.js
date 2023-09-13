document.addEventListener("DOMContentLoaded", function () {
  let currentInput = "";
  const inputField = document.getElementById("text");
  const buttons = document.querySelectorAll(".button");

  inputField.disabled = true;

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const buttonValue = event.target.textContent;

      console.log(buttonValue);

      if (buttonValue === "AC") {
        currentInput = "";
      } else if (buttonValue === "Del") {
        currentInput = currentInput.slice(0, -1);
      } else if (
        buttonValue === "sin" ||
        buttonValue === "cos" ||
        buttonValue === "tan" ||
        buttonValue === "log"
      ) {
        currentInput += buttonValue + "(";
      } else if (buttonValue === "x!") {
        if(currentInput === ""){

        }
        else{
            currentInput += "!";
        } 
      }
      else if (buttonValue === "^") {
        if(currentInput === ""){

        }
        else{
            currentInput += "^";
        } 
      } else if (buttonValue === "=") {
        console.log(currentInput);
        if (currentInput.includes("^")) {
          const parts = currentInput.split("^");
          if (parts.length === 2) {
            const base = parseFloat(parts[0]);
            const exponent = parseFloat(parts[1]);
            currentInput = Math.pow(base, exponent).toString();
          } else {
            currentInput = "Error";
          }
        } else if (currentInput.includes("√")) {
          const number = parseFloat(currentInput.substring(1));
          currentInput = Math.sqrt(number);
          currentInput = currentInput.toFixed(1).toString();
        } else if (currentInput.startsWith("sin(")) {
          const expression = currentInput.substring(4, currentInput.length);
          const number = parseInt(expression);
          currentInput = Math.sin((number * Math.PI) / 180)
            .toFixed(2)
            .toString();
        } else if (currentInput.startsWith("cos(")) {
          const expression = currentInput.substring(4, currentInput.length);
          const number = parseFloat(expression);
          currentInput = Math.cos((number * Math.PI) / 180)
            .toFixed(2)
            .toString();
        } else if (currentInput.startsWith("tan(")) {
          const expression = currentInput.substring(4, currentInput.length);
          const number = parseFloat(expression);
          currentInput = Math.tan((number * Math.PI) / 180)
            .toFixed(2)
            .toString();
        } else if (currentInput.startsWith("log(")) {
          const expression = currentInput.substring(4, currentInput.length);
          const number = parseFloat(expression);
          currentInput = Math.log(number).toFixed(2).toString();
        } else if (currentInput.includes("!")) {
          const expression = currentInput.substring(0, currentInput.length);
          let fact;
          const number = parseFloat(expression);
          if (number === 0) {
          } else {
            fact = 1;
            for (i = 1; i <= number; i++) {
              fact *= i;
            }
          }
          currentInput = fact;
        } else {
          currentInput = eval(currentInput).toString();
        }
      } else {
        currentInput += buttonValue;
      }
      inputField.value = currentInput;
    });
  });
});
