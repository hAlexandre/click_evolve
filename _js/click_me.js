// JavaScript Document

function updateIncome() { 
	var income = parseInt(document.getElementById('income').innerHTML);
	console.log(income);
	document.getElementById('income').innerHTML = income + 1;
}

function updateQt() {
//	var income = document.getElementById
	var valor = document.getElementById('coin-qt').innerHTML;
	document.getElementById('coin-qt').innerHTML = parseInt(valor) + 1;	
}

function reset() {
	document.getElementById('coin-qt').innerHTML = 0;	
}