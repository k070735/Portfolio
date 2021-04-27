window.onclick = function(event) {
    a= event.clientX;
	b= event.clientY;
	function1(a,b);
}

var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

function function1(a,b) {
	ctx.beginPath();
	ctx.arc(a, b, 5, 0, 360, false); //arc(시작 X좌표 , 시작Y좌표 , 반지름 크기, 시작각도, 끝 각도 , 시계or반시계 방향true/false)
	ctx.fillStyle = "gold";
	ctx.fill(); 
	ctx.closePath();
}




