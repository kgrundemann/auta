"use strict"
let cars=[];
function addRow() {
  var marka = document.getElementById('marka').value;
  var model = document.getElementById('model').value;
  var kolor = document.getElementById('kolor').value;
  var table = document.getElementsByTagName("table")[0];
  var newRow = table.insertRow(table.rows.length);

  var cel1 = newRow.insertCell(0);
  var cel2 = newRow.insertCell(1);
  var cel3 = newRow.insertCell(2);

  cel1.innerHTML = marka;
  cel2.innerHTML = model;
  cel3.innerHTML = kolor;
}
function addCar() { 
  var table= document.querySelector("table");
  var car = {
    marka: document.getElementById('marka').value,
    model: document.getElementById('model').value,
    kolor: document.getElementById('kolor').value,
  }
  cars.push(car);
  document.forms[0].reset(); //resetowanie formularza
  console.log(cars)
  
  if (!cars.length<=0){
    table.style.visibility = "visible";
  }
}
function onClick() {
  addRow();
  addCar();
}