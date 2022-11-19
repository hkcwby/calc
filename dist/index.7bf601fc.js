let currentDisplayValue = "0";
let storedNumber = null;
let secondNumber = null;
let display = document.querySelector("#display-value");
//main function for clicks
function onCalcButtonClick(e) {
    //run animation
    animate(e);
    //run function to determine action
    entry(e);
}
function entry(e) {
    console.log(e.target.innerHTML);
    console.log(currentDisplayValue = String(e.target.innerHTML));
    console.log(currentDisplayValue.concat(e.target.innerHTML));
    console.log(currentDisplayValue == 0);
    currentDisplayValue === "0" ? currentDisplayValue = String(e.target.innerHTML) : currentDisplayValue.concat(e.target.innerHTML);
    display.innerHTML = currentDisplayValue;
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
