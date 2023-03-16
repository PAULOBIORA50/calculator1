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


const res = document.getElementById('result')

//to display values on the screen
function liveScreen(num) {
  if (!result.value) {
    result.value = "";
  }
  result.value += num;
}
//delete button
function del(){
  result.value = result.value.slice(0, -1)
}
//to clear screen 
function clean() {
  result.value =" ";
}
// to calculate 
function calculate(){
  result.value = eval(result.value);
}