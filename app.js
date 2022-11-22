let currentDisplayValue = "0";
let storedNumber = null;
let otherNumber = null;
let decimal = false;
let integerValue = 0;
let decimalValue = "";
let cleared = false;

let display = document.querySelector("#display-value");

//main function for clicks
function onCalcButtonClick(e){
  //run animation
  animate(e);
  //run function to determine action
  entry(e);
    
}

function decimalToggle(e){
  animate(e);
  decimal = true;
}

function clearing(e){
  console.log("triggered");
  animate(e);

  if(!cleared){
    currentDisplayValue=0;
    display.innerHTML=currentDisplayValue;
    integerValue=0;
    decimalValue="";
    decimal=false;
    cleared=true;
  }
  else{
    integerValue=0;
    decimalValue="";
    decimal=false;
    cleared=true;
    otherNumber=null;
    storedNumber=null;

  }


}


function entry(e){
  if(decimal){
    decimalValue=decimalValue.concat(String(e.target.innerHTML));
  
    console.log(decimalValue);
    console.log(String(currentDisplayValue).concat(".",decimalValue))

    currentDisplayValue = Number(String(integerValue).concat(".",decimalValue));
    display.innerHTML=String(integerValue).concat(".",decimalValue);

  }
  else{
    integerValue = (integerValue*10) + Number(e.target.innerHTML);
    currentDisplayValue=integerValue;
    display.innerHTML=String(currentDisplayValue);
  }
}
//creating a click animation for the item
function animate(e){
  e.target.classList.add("clicked");
  console.log(e.target.classList);
  setTimeout(() => {
      e.target.classList.remove("clicked");
    }, "100")


}