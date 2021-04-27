window.onload=function(){
	screen=document.getElementById("screen");
	resultsc=document.getElementById("resultsc");
}

function writenum(a) {
	screen.value=screen.value+a;
}

function result() {
	var result = eval(screen.value);
	resultsc.value = result;
}

function ac() {
	screen.value ="";
	resultsc.value ="";
}