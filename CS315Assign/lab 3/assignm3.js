"use strict";

//JavaScript code For Calculator
// let inp1 = document.querySelector(".first").value;
// let inp2 = document.querySelector(".second").value;
let add = document.querySelector(".plus");
// let subtract = document.querySelector(".minus");
// let multip = document.querySelector(".multi");
let oper = document.querySelector(".result");
add.addEventListener("click", function () {
  let sum;
  // sum=Number(inp1) + Number(inp2) //I don't know why doesn't work
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

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////;

// //Reference
// let elements = document.getElementById("myId");
// elements.innerHTML = "Atnafu Yigzw muller piter";
// console.log(elements.innerHTML);

// let trial = document.querySelector(".MyClass");
// trial.addEventListener("click", function () {
//   trial.innerHTML = "tekletsdik@gma";
//   trial.style.backgroundColor = "green";
//   trial.style.color = "white";
//   console.log(trial.innerHTM);
// });
