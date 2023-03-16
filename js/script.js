function add(number1, number2,) {
  return number1 + number2 ;
}


function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

$(document).ready(function(){
  $("form").submit(function(event){
    //to fix the default behaviour of browser
    event.preventDefault();
  })
}) 
const res = document.getElementById('result')

//to display values on the screen
function liveScreen(num) {
  if (!result.value) {
    result.value = "";
  }
  result.value += num;
}
//for delete button
function del(){
  result.value = result.value.slice(0, -1)
}
//for clear button
function clean() {
  result.value =" ";
}
// to calculate 
function calculate(){
  result.value = eval(result.value);
}
//error message when wrong operation is entered
function calculate(){
  try{
  result.value = eval(result.value)
    
  }
  catch(err){
    alert("invalid input please enter a valid input")
  }
  
}


 