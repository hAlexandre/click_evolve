// JavaScript Document

var Game = {};

Game.fps = 40;
var img = new Image(); img.src = "_img/coin.png";  
var coins;
var increment;
var income;
var t;
var ok = 0;
var condIncrement = 0;
var incrementos = [];

Game.initialize = function() {

	coins = 0;
	t = 0;
	income = 0.5;
  	increment = 1;
  	this.context = document.getElementById("canvas").getContext("2d");
  	Game.config();
    if(ok==0) this.context.drawImage(img, 0, 0, 300, 300, 120, 150, 300, 300);

};

Game.coinClick = function() { 
    coins = coins + increment;   
    var x = Math.random() * 170 + 150;
    var y = Math.random() * 170 + 210;
    condIncrement = 20;  
    incrementos.push([increment, condIncrement, x, y]);
    
}

Game.draw = function() {
    this.context.clearRect(0, 0, canvas.width, canvas.height);
  	this.context.font = "bold 18px Arial";
    this.context.fillStyle = "black";
  	this.context.fillText("Moedas: " + Math.floor(coins), 195, 70);    
    this.context.fillText("Moedas por segundo: " + (income), 195, 100);
  	this.context.drawImage(img, 0, 0, 300, 300, 120, 150, 310, 310);
    
    this.context.fillStyle=('green');
    for(var i = 0 ; i < incrementos.length ; i++) {
        if(incrementos[i][1] == 0) {
            incrementos.splice(i,1);
            i -= 1;
        }
        else if(i == -1) break
        else{
            incrementos[i][1] -= 1;
            this.context.fillText("$"+increment,incrementos[i][2], incrementos[i][3]);
        }
    }
    

  	
    
};

Game.update = function() { 	
    if(condIncrement > 0) condIncrement -= 1;
	if(t==40){
		t = -1;
		coins += income;
	}
	t++;
  
};



Game.config = function() {

	document.querySelector('canvas').addEventListener("click", function(event) {        
            
        var rect = canvas.getBoundingClientRect();        
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;       
        
        
        var dist = Math.sqrt( Math.pow(x-270-8,2) + Math.pow(y-8-300,2));
        if(dist<=157)
        {
            console.log("Click na moeda");
            Game.coinClick();
        }
    });
	
    Game.run = (function() {
        var loops = 0, skipTicks = 1000 / Game.fps,
        maxFrameSkip = 10,
        nextGameTick = (new Date).getTime();
        return function() {
            loops = 0;
            while ((new Date).getTime() > nextGameTick) {
                Game.update();
                nextGameTick += skipTicks;
                loops++;                
            }
            Game.draw();
        };
    })();
    (function() {
        var onEachFrame;
        if (window.webkitRequestAnimationFrame) {
            onEachFrame = function(cb) {
                var _cb = function() { cb(); webkitRequestAnimationFrame(_cb); }
                _cb();
            };
        }
        else if (window.mozRequestAnimationFrame) {
                onEachFrame = function(cb) {
                var _cb = function() { cb(); mozRequestAnimationFrame(_cb); }
                _cb();
            };
        }
        else {
            onEachFrame = function(cb) {
                setInterval(cb, 1000 / 60);
            }
        }
        window.onEachFrame = onEachFrame;
    })();
    window.onEachFrame(Game.run);
	
}