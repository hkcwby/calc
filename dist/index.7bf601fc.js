let currentDisplayValue = "0";
let storedNumber = null;
let otherNumber = null;
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
        cleared = true;
        otherNumber = null;
        storedNumber = null;
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
    //reset the values
    cleared = false;
    integerValue = 0;
    decimalValue = "";
    currentDisplayValue = 0;
    display.innerHTML = String(currentDisplayValue);
}
function signSetting(e) {
    //animate the click for user feedback
    animate(e);
    if (integerValue) integerValue = integerValue * -1;
    console.log(integerValue);
    if (decimal) {
        currentDisplayValue = Number(String(integerValue).concat(".", decimalValue));
        display.innerHTML = String(integerValue).concat(".", decimalValue);
    } else {
        currentDisplayValue = integerValue;
        display.innerHTML = String(currentDisplayValue);
    }
}
function calculate(firstValue, secondValue, operationValue) {
    let output = 0;
    switch(operationValue){
        case "+":
            output = firstValue + secondValue;
        case "-":
            output = firstValue - secondValue;
        case "&#247":
            output = firstValue / secondValue;
        case "&#215":
            output = firstValue * secondValue;
    }
    return output;
}

//# sourceMappingURL=index.7bf601fc.js.map
