let currentDisplayValue = 0;
let storedNumber = null;
let secondNumber = null;
console.log(currentDisplayValue);

function onCalcButtonClick(e){
    //creating a click animation for the item
    e.target.classList.add("clicked");
    console.log(e.target.classList);
    setTimeout(() => {
        e.target.classList.remove("clicked");;
      }, "100")



}