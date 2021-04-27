/*1. 연산자 여러번 쓰는 에러 수정
2. 제곱 >> NaN 수정*/


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

function squared() {
	let a = screen.value;
	squared_result = Math.pow(a,2);
	screen.value = squared_result;
}

function tan() {
	resultsc.value = Math.tan((screen.value*3.14)/180);
}

function sin() {
	resultsc.value = Math.sin((screen.value*3.14)/180);
}

function cos() {
	resultsc.value = Math.cos((screen.value*3.14)/180);
}
