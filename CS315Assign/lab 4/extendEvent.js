"use strict";
window.onload = pageLoad;
function pageLoad() {
  document.getElementById("itemAdd").onclick = itemAdd;
}

function itemAdd() {
  let names = document.getElementById("names").value;
  let catag = document.getElementById("catagories").value;
  let quan = document.getElementById("quantities").value;
  let rate = document.getElementById("ratings").value;
  let tableList = document.getElementById("tableList");

  let index = 1;
  let row = tableList.insertRow(index);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  let cell6 = row.insertCell(5);

  cell1.innerHTML = names;
  cell2.innerHTML = catag;
  cell3.innerHTML = parseInt(quan);
  cell4.innerHTML = rate;

  // //How to add Button in a javaScript
  let update =
    '<button onclick="editFun(this)" class="inventBtn" type="button" id="editId" >Edit</button>' +
    '<button onclick="saveFun(this)" class="inventBtn" type="submit" id="saveId">Save</button>';
  let removeBtn =
    '<button onclick="removeFun(this)" class="inventBtn" type="button" id="deletId" style="font-size:20px; color:red; width:90px ">Delet</button>';

  let div = document.createElement("div");
  div.innerHTML = removeBtn;
  cell6.append(div);

  let saveBtn = document.createElement("saveBtn");
  saveBtn.innerHTML = update;
  cell5.append(saveBtn);

  if (!parseInt(quan)) {
    alert("Price is not a number");
    cell3.style.backgroundColor = "red";
  }
  if (names === "" || catag === "" || quan === "" || rate === "") {
    alert("There is empty field, you have to fill🟥");
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
  }

  document.getElementById("names").value = "";
  document.getElementById("catagories").value = "";
  document.getElementById("quantities").value = "";
  document.getElementById("ratings").value = "";

  index++;
}

function removeFun() {
  console.log(this);
  this.parentNode.parentNode.remove();
}
function editFun() {
  let childernOfRow = this.parentNode.parentNode.childern;
  childernOfRow[0].remove();
}
function saveFun() {
  console.log(this);
  let childernOfRow = this.parentNode.parentNode.childern;
  childernOfRow[0].prop("disabled", true);
}

// /* When the user clicks on the button,
// // toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function filterFunction() {
  let input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
//
