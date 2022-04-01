"use strict";
let inp1 = document.querySelector(".first").value;
let inp2 = document.querySelector(".second").value;
let add = document.querySelector(".plus");
let oper = document.querySelector(".result");
add.addEventListener("click", function () {
  let sum;
  //  sum=Number(inp1) + Number(inp2) //I don't know why doesn't work
  sum =
    Number(document.querySelector(".first").value) +
    Number(document.querySelector(".second").value);
  oper.innerHTML = sum;
});
// let adding = function(){
// let input1= +(document.getElementById("finput").value);
// let input2= +(document.getElementById("linput").value);
// let addTwo= input1+input2;
// document.getElementById("operation").innerHTML=addTwo;

// }
let subtract = function () {
  let input1 = +document.getElementById("finput").value;
  let input2 = +document.getElementById("linput").value;
  let subtractTwo = input1 - input2;
  document.getElementById("operation").innerHTML = subtractTwo;
};
let multiply = function () {
  let input1 = +document.getElementById("finput").value;
  let input2 = +document.getElementById("linput").value;
  let multiplyTwo = input1 * input2;
  document.getElementById("operation").innerHTML = multiplyTwo;
};
let x = "";
if (x === "") {
  alert("No");
}
