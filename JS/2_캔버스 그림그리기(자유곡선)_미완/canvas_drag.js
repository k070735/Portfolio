function drawstart() {
	var canvas=document.getElementById("canvas");
	var ctx=canvas.getContext("2d");
	ctx.lineWidth=2;
	ctx.strokeStyle="gold";

	ctx.addEventListener("mousedown", function(event) {mousedown(event)});
	ctx.addEventListener("mouseup",function(event) {mouseup(event)});
	ctx.addEventListener("mousemove",function(event) {mousemove(event)});
	ctx.addEventListener("mouseout",function(event) {mouseout(event)});
}


var startX=0, startY=0;
var drawing=false;

function draw(a,b) {
	ctx.beginPath();
	ctx.moveTo(startX,startY);
	ctx.lineTo(a,b);
	ctx.stroke();
}

function mousedown(event); {
	startX=event.offsetX;
	startY=event.offsetY;
	drawing=true;
}

function mousemove(event){
	if(!drawing) return;
	var a= event.offsetX, b=event.offsetY;
	draw(a,b);
	startX=a; startY=b;
}

function mouseout(event) {drawing=false;}
