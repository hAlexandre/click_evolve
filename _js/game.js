// JavaScript Document

var Game = {};

Game.fps = 40;
var img = new Image(); img.src = "_img/coin.png";  
var coins;
var increment;
var income;
var t;

Game.initialize = function() {

	coins = 0;
	t = 0;
	income = 1;
  	increment = 1;
  	this.context = document.getElementById("canvas").getContext("2d");
  	Game.config();

};

Game.coinClick = function() { coins = coins + increment;}

Game.draw = function() {
    this.context.clearRect(0, 0, canvas.width, canvas.height);
  	this.context.font = "bold 18px Arial";
  	this.context.fillText("Moedas: " + coins, 210, 100);
  	//this.context.drawImage(img, 0, 0, 300, 300, 230, 150, 300, 300);
  	this.context.drawImage(img, 100, 200);
};

Game.update = function() { 	
	if(t==40){
		t = -1;
		coins += income;
	}
	t++;
  
};



Game.config = function() {

	document.querySelector('body').addEventListener("click", function(event) {        
        var x = event.clientX - 8;
        var y = event.clientY - 8;   
        
        var dist = Math.sqrt( Math.pow(x-359,2) + Math.pow(y-278,2));
        if(dist<=125)
            Game.coinClick();
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