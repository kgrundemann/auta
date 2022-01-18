"use strict"

function showTable(){
  var table= document.querySelector("table");
  table.style.visibility = "visible";
 }

function addRow() {
  var marka = document.getElementById("marka").value;
  var model = document.getElementById("model").value;
  var kolor = document.getElementById("kolor").value;
  var table = document.getElementsByTagName("table")[0];
  var newRow = table.insertRow(table.rows.length);

  var cel1 = newRow.insertCell(0);
  var cel2 = newRow.insertCell(1);
  var cel3 = newRow.insertCell(2);

  cel1.innerHTML = marka;
  cel2.innerHTML = model;
  cel3.innerHTML = kolor;
}

function onClick() {
  showTable();
  addRow();
}