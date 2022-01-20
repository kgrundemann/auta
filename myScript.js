"use strict";
let cars = [];

function validate(newCar) {
  let success = true;
	if (newCar.marka === "") {
		alert("Marka nie może być pusta");
		success =false;
	}
	else if (newCar.model === "") {
		alert("Model nie może być pusty");
		success =false;
	}
	else if (newCar.kolor === "") {
		alert("Kolor nie może być pusty");
		success =false;
	}
	return success;
}

function addRow(newCar) {
	let table = document.getElementsByTagName("table")[0];
	var newRow = table.insertRow(table.rows.length);

	var cel1 = newRow.insertCell(0);
	var cel2 = newRow.insertCell(1);
	var cel3 = newRow.insertCell(2);

	cel1.innerHTML = newCar.marka;
	cel2.innerHTML = newCar.model;
	cel3.innerHTML = newCar.kolor;
}

function addCar(newCar) {
	cars.push(newCar);
	document.forms[0].reset(); //resetowanie formularza
}

function showTable() {
	let table = document.querySelector("table");
	if (cars.length > 0) table.style.visibility = "visible";
}

function onClick() {
	const newCar = {
		marka: document.getElementById("marka").value,
		model: document.getElementById("model").value,
		kolor: document.getElementById("kolor").value,
	};

	if (validate(newCar)) {
		addRow(newCar);
		addCar(newCar);
		showTable();
	}
}
