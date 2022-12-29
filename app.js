//initialising tracked values and settings
let currentDisplayValue = "0";
let storedNumber = 0;
let otherNumber = 0;
let decimal = false;
let integerValue = 0;
let decimalValue = "";
let cleared = false;
let operation = "";

//identifying the html element where data values will be displayed.
let display = document.querySelector("#display-value");

//creating a click animation to be used on all buttons and provide the user feedback.
function animate(e) {
  e.target.classList.add("clicked");
  setTimeout(() => {
    e.target.classList.remove("clicked");
  }, "100");
}

//adding animate function directly to each button.
let myButtons = document.querySelectorAll("button");
myButtons.forEach((item) => item.addEventListener("click", (e) => animate(e)));

//simulates powering on the machine after a power off, the calculator starts in an on position.
function powerOn(e) {
  display.classList.remove("off");
}

//simulates a powering off the machine clearing the current memory in the process.
function powerOff(e) {
  clearing(e);
  clearing(e);
  display.classList.add("off");
}

//function for toggling to decimal place mode.
function decimalToggle(e) {
  decimal = true;
}

//function for clearing present values or to clear the full memory on a double tap.
function clearing(e) {
  //if this is the first press just clear current values.
  if (!cleared) {
    currentDisplayValue = 0;
    display.innerHTML = currentDisplayValue;
    integerValue = 0;
    decimalValue = "";
    decimal = false;
    cleared = true;
  }
  //if its the second press reset all the stored memory.
  else {
    cleared = false;
    otherNumber = null;
    storedNumber = 0;
    operation = "";
  }
}

function entry(e) {
  //if the cleared button has been pressed once it needs to be reset
  cleared = false;
  //if in decimal mode we must add values in a slightly more laborious manner that imitates a physical calculator display
  if (decimal) {
    decimalValue = decimalValue.concat(String(e.target.innerHTML));
    currentDisplayValue = Number(
      String(integerValue).concat(".", decimalValue)
    );
    display.innerHTML = String(integerValue).concat(".", decimalValue);
  }
  //otherwise its a simple operation of just adding on the next number
  else {
    integerValue = integerValue * 10 + Number(e.target.innerHTML);
    currentDisplayValue = integerValue;
    display.innerHTML = String(currentDisplayValue);
  }
}

function operate(e) {
  //store the desired operation
  operation = e.target.innerHTML;
  //store the first number in the operation
  otherNumber = currentDisplayValue;
  //reset the values
  cleared = false;
  integerValue = 0;
  decimal = false;
  decimalValue = "";
  currentDisplayValue = 0;
  display.innerHTML = String(currentDisplayValue);
}

function signSetting(e) {
  //determine if we are handling a decimal value or an integer value then take action as appropriate.
  if (decimal) {
    integerValue = integerValue * -1;
    currentDisplayValue = Number(
      String(integerValue).concat(".", decimalValue)
    );
    display.innerHTML = String(integerValue).concat(".", decimalValue);
  } else {
    currentDisplayValue = currentDisplayValue * -1;
    display.innerHTML = String(currentDisplayValue);
  }
}

//replaces the current value in the display with its square root
function squareRoot(e) {
  currentDisplayValue = Math.sqrt(currentDisplayValue);
  display.innerHTML = String(currentDisplayValue);
}

//the primary function to calculate a value based on the two operands and the operator
function calculate(firstValue, secondValue, operationValue) {
  let output = 0;
  switch (operationValue) {
    case "+":
      output = firstValue + secondValue;
      break;
    case "-":
      output = firstValue - secondValue;
      break;
    case "÷":
      output = firstValue / secondValue;
      break;
    case "×":
      output = firstValue * secondValue;
      break;
    case "Δ%":
      output = ((firstValue - secondValue) / secondValue) * 100;
      break;
    case "%":
      output = firstValue * (1 * (secondValue / 100));
      break;
  }
  return output;
}

//actions triggered when the equals button is pressed.
function equals(e) {
  //if two operands and the operator have been supplied then perform the calculation.
  if (otherNumber && operation) {
    //performing calculation and rounding using "toFixed" to remove javascript floating point calc artifacts.
    currentDisplayValue = Number(
      calculate(otherNumber, currentDisplayValue, operation).toFixed(7)
    );
    display.innerHTML = String(currentDisplayValue);
    //reset relevant tracked values.
    otherNumber = null;
    decimal = false;
    decimalValue = 0;
    integerValue = 0;
  }
}

function memPlus(e) {
  cleared = false;
  storedNumber += currentDisplayValue;
}

function memMinus(e) {
  cleared = false;
  storedNumber -= currentDisplayValue;
}

function memClear(e) {
  cleared = false;
  storedNumber = 0;
}

function memRecall(e) {
  cleared = false;

  currentDisplayValue = storedNumber;
  display.innerHTML = String(currentDisplayValue);
}
