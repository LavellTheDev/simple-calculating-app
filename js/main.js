alert("Welcome to my simple Calculator")
  document.getElementById("add").onclick = add
  document.getElementById("multiply").onclick = multiply
  document.getElementById("subtract").onclick = subtract
  document.getElementById("divide").onclick = divide
  document.getElementById("clear").onclick = clear

function add (){
  var num1= parseFloat(document.getElementById("firstVal").value);
  var num2= parseFloat(document.getElementById("secondVal").value);
  var sum= num1 + num2;
  document.getElementById("result").innerHTML = sum;
}

function subtract (num1, num2){
  document.getElementById("subtract").onclick = subtract;
  var num1=  parseFloat(document.getElementById("firstVal").value);
  var num2=  parseFloat(document.getElementById("secondVal").value);
  var sum= num1 - num2;
  document.getElementById("result").innerHTML = sum;

}
function multiply (num1, num2){
  document.getElementById("multiply").onclick = multiply;
  var num1=  parseFloat(document.getElementById("firstVal").value);
  var num2=  parseFloat(document.getElementById("secondVal").value);
  var sum= num1 * num2;
  document.getElementById("result").innerHTML = sum;
}
function divide (num1, num2){
  document.getElementById("divide").onclick = divide;
  var num1=  parseFloat(document.getElementById("firstVal").value);
  var num2=  parseFloat(document.getElementById("secondVal").value);
  var sum= num1 / num2;
  document.getElementById("result").innerHTML = sum;

}

function clear(){
  document.getElementById("firstVal").value =""
  document.getElementById("secondVal").value =""
}
