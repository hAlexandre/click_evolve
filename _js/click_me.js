// JavaScript Document
function updateQt(){
	var valor = document.getElementById('coin-qt').innerHTML;
	document.getElementById('coin-qt').innerHTML = parseInt(valor)+1;	
}

function reset(){
	document.getElementById('coin-qt').innerHTML = 0;	
}