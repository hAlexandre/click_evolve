// JavaScript Document

var speed = 0;
var qtItems = 2;

function updateTick(){
	var valor = document.getElementById('coin-qt').innerHTML;	
	document.getElementById('coin-qt').innerHTML = parseInt(valor)+qtItems;
}

if (speed !== 0){
	setInterval(updateTick, speed);
}