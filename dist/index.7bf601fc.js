let currentDisplayValue = 0;
let storedNumber = null;
let secondNumber = null;
let decimal = false;
let decimalValue = "";
let display = document.querySelector("#display-value");
//main function for clicks
function onCalcButtonClick(e) {
    //run animation
    animate(e);
    //run function to determine action
    entry(e);
}
function decimalToggle(e) {
    animate(e);
    decimal = true;
}
function entry(e) {
    if (decimal) {
        decimalValue = decimalValue.concat(String(e.target.innerHTML));
        console.log(decimalValue);
        console.log(Number(decimalValue) / (10 ^ decimalValue.length));
        currentDisplayValue = currentDisplayValue + Number(decimalValue) / (10 ^ decimalValue.length);
        display.innerHTML = currentDisplayValue;
    } else {
        currentDisplayValue = currentDisplayValue * 10 + Number(e.target.innerHTML);
        display.innerHTML = currentDisplayValue;
    }
}
//creating a click animation for the item
function animate(e) {
    e.target.classList.add("clicked");
    console.log(e.target.classList);
    setTimeout(()=>{
        e.target.classList.remove("clicked");
    }, "100");
}

//# sourceMappingURL=index.7bf601fc.js.map
