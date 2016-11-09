// JavaScript Document

var speed = 0;
var items = 0;

function updateSpeed(){
	speed = parseInt(document.getElementById('speed-value').value);	
	document.getElementById('speed-value-r').innerHTML = speed;
	updateTick();
}

function updateItems(){
	items = parseInt(document.getElementById('items-value').value);	
	document.getElementById('speed-items-r').innerHTML = items;
	updateTick();
}

function updateCount(){
	var valor = document.getElementById('coin-qt').innerHTML;	
	document.getElementById('coin-qt').innerHTML = parseInt(valor)+items;
}

function updateTick(){
	if(speed = 0){
		speed = 9999;
	} else {
	setInterval(updateCount, speed);	
	}
}
