/*indexof, substring*/

window.onload = function() {
	clearBt = document.getElementById("clearBt")
	reverseBt = document.getElementById("reverseBt")
	firstChar = document.getElementById("firstChar")
	secondChar = document.getElementById("secondChar")
	outputDiv = document.getElementById("outputDiv")
}


//초기화
function cleaner() {
	clearBt.style.display = "none"
	reverseBt.style.display = "none";
	firstChar.value = "";
	secondChar.value ="";
	outputDiv.innerHTML ="";
	document.getElementById("outputMent").style.display = "none";
}


//랜덤 배열 함수

function randomStr() {
	
	originArr = new Array();
	
	originArr.push(firstChar.value);
	originArr.push(secondChar.value);
	
	randomArr= new Array();  //랜덤 문자열 넣을 배열 생성
	
	for(var i=0; i<100; i++) {
		randomNum= Math.floor(Math.random()*originArr.length);
		randomArr.push(originArr[randomNum]);
	}
	
	randomString = randomArr.join('');
	
	
	outputDiv.innerHTML = randomString;
	outputMent.style.display="block";
	reverseBt.style.display="block";
	clearBt.style.display="block";
	
}


/*
substr(2,4) = 2번째부터 4자리까지 추출
substring(2,4) = 2~4까지 추출
*/



//3개 나열 시 제거 함수
function findThreeStr(str) {
	
	let str1st = originArr[0];
	let str2nd = originArr[1];
	
	let firstStr = str1st+str1st+str1st;
	let secondStr = str2nd+str2nd+str2nd;
	
		
	if (str.indexOf(firstStr) != -1) { //aaa가 있나요?
		
		let firstPos = str.indexOf(firstStr);
		
		if(str.indexOf(secondStr) != -1) { //aaa도 있고 bbb도 있나요?
			let secondPos = str.indexOf(secondStr);
			
			if (firstPos < secondPos) { //aaa가 bbb보다 앞에있나요?
				let newstr = plusFunction(str,firstPos) //aaa없애기
				findThreeStr(newstr);
			} 
			
			else { //bbb가 앞에있으면
				let newstr = plusFunction(str,secondPos); //b 없애기
				findThreeStr(newstr);
			}
		}
		
		else { //aaa만 있나요?
			let newstr = plusFunction(str,firstPos); //a만 없애기
			findThreeStr(newstr);
		}
	}
	
	else if (str.indexOf(secondStr) != -1) { //aaa는 없고 bbb가 있나요?
		let secondPos = str.indexOf(secondStr);
		let newstr = plusFunction(str,secondPos);
		findThreeStr(newstr);
	}
	
	else { //aaa도 없고 bbb도 없엉
		return str;
	}
}


function plusFunction(str,pos) {
	let prevStr = str.substring(0,pos);
	let epStr = str.substring(pos+3);
	let finalString = prevStr+epStr;
	return finalString;
}


function input() {
	let output=findThreeStr(randomString);
	outputDiv.innerHTML = output;
}