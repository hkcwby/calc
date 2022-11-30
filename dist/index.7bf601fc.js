let currentDisplayValue = "0";
let storedNumber = 0;
let otherNumber = 0;
let otherNumberDecimalLength = 0;
let decimal = false;
let integerValue = 0;
let decimalValue = "";
let cleared = false;
let operation = "";
let display = document.querySelector("#display-value");
//creating a click animation to be used on all buttons and provide the user feedback
function animate(e) {
    e.target.classList.add("clicked");
    setTimeout(()=>{
        e.target.classList.remove("clicked");
    }, "100");
}
//function for toggling to decimal place mode.
function decimalToggle(e) {
    animate(e);
    decimal = true;
}
//function for clearing present values or to clear the full memory on a double tap.
function clearing(e) {
    //animate the click for user feedback
    animate(e);
    //if this is the first press just clear current values
    if (!cleared) {
        currentDisplayValue = 0;
        display.innerHTML = currentDisplayValue;
        integerValue = 0;
        decimalValue = "";
        decimal = false;
        cleared = true;
    } else {
        integerValue = 0;
        decimalValue = "";
        decimal = false;
        cleared = false;
        otherNumber = null;
        otherNumberDecimalLength = 0;
        storedNumber = 0;
        operation = "";
    }
}
function entry(e) {
    //animate the click for user feedback
    animate(e);
    //if the cleared button has been pressed once it needs to be reset
    cleared = false;
    //if in decimal mode we must add values in a slightly more laborious manner that imitates a physical calculator display
    if (decimal) {
        decimalValue = decimalValue.concat(String(e.target.innerHTML));
        currentDisplayValue = Number(String(integerValue).concat(".", decimalValue));
        display.innerHTML = String(integerValue).concat(".", decimalValue);
    } else {
        integerValue = integerValue * 10 + Number(e.target.innerHTML);
        currentDisplayValue = integerValue;
        display.innerHTML = String(currentDisplayValue);
    }
}
function operate(e) {
    //animate the click for user feedback
    animate(e);
    //store the desired operation
    operation = e.target.innerHTML;
    //store the first number in the operation
    otherNumber = currentDisplayValue;
    otherNumberDecimalLength = String(decimalValue).length;
    //reset the values
    cleared = false;
    integerValue = 0;
    decimal = false;
    decimalValue = "";
    currentDisplayValue = 0;
    display.innerHTML = String(currentDisplayValue);
}
function signSetting(e) {
    //animate the click for user feedback
    animate(e);
    if (decimal) {
        integerValue = integerValue * -1;
        currentDisplayValue = Number(String(integerValue).concat(".", decimalValue));
        display.innerHTML = String(integerValue).concat(".", decimalValue);
    } else {
        currentDisplayValue = currentDisplayValue * -1;
        display.innerHTML = String(currentDisplayValue);
    }
}
function squareRoot(e) {
    animate(e);
    currentDisplayValue = Math.sqrt(currentDisplayValue);
    display.innerHTML = String(currentDisplayValue);
}
function calculate(firstValue, secondValue, operationValue) {
    let output = 0;
    switch(operationValue){
        case "+":
            output = firstValue + secondValue;
            break;
        case "-":
            output = firstValue - secondValue;
            break;
        case "\xf7":
            output = firstValue / secondValue;
            break;
        case "\xd7":
            output = firstValue * secondValue;
            break;
        case "Δ%":
            output = (firstValue - secondValue) / secondValue * 100;
            break;
        case "%":
            output = firstValue * (1 * (secondValue / 100));
            break;
    }
    return output;
}
function equals(e) {
    //animate the click for user feedback
    animate(e);
    if (otherNumber && operation) {
        //slightly complicated process to resolve floating point mathematics issues in Javascript
        currentDisplayValue = Number(calculate(otherNumber, currentDisplayValue, operation).toFixed(Math.max(String(decimalValue).length, otherNumberDecimalLength) + 4));
        display.innerHTML = String(currentDisplayValue);
        otherNumber = null;
        otherNumberDecimalLength = 0;
        decimal = false;
        decimalValue = 0;
        integerValue = 0;
    }
}
function memPlus(e) {
    animate(e);
    cleared = false;
    storedNumber += currentDisplayValue;
}
function memMinus(e) {
    animate(e);
    cleared = false;
    storedNumber -= currentDisplayValue;
}
function memClear(e) {
    animate(e);
    cleared = false;
    storedNumber = 0;
}
function memRecall(e) {
    animate(e);
    cleared = false;
    currentDisplayValue = storedNumber;
    display.innerHTML = String(currentDisplayValue);
}

//# sourceMappingURL=index.7bf601fc.js.map
