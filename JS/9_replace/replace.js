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

function output() {
	
	originArr = new Array();
	
	originArr.push(firstChar.value);
	originArr.push(secondChar.value);
	
	randomArr= new Array();  //랜덤 문자열 넣을 배열 생성
	
	for(var i=0; i<10; i++) {
		randomNum= Math.floor(Math.random()*originArr.length);
		randomArr.push(originArr[randomNum]);
	}
	
	randomString = randomArr.join('');
	
	
	outputDiv.innerHTML = randomString;
	outputMent.style.display="block";
	reverseBt.style.display="block";
	clearBt.style.display="block";
	
}



//랜덤 배열 함수

function reverser() {
	
	//문자열 뒤집기 버튼 여러번 누르면 바뀌게 하기
	
	if (outputDiv.innerHTML != randomString ) {
		outputDiv.innerHTML = randomString;
		reverseBt.value = "문자열 뒤집기";  
	}
	
	
	else {
		
		//임시문자
		let tempArr = ['a','b','c'];
		
		let firstString = originArr[0];
		let secondString = originArr[1];
		
		if (firstString != tempArr[0] && secondString != tempArr[0]) {
			temp = tempArr[0]
		}
		
		else if (firstString != tempArr[1] && secondString != tempArr[1]) {
			temp = tempArr[1]
		}
		
		else {
			temp = tempArr[2]
		}
		
		//구분할 수 있게 임의의 문자로 바꾸고 다시 치환
		
		let firstReverse = replaceAll(randomString, firstString, temp);
		let secondReverse = replaceAll(firstReverse, secondString , firstString);
		let finalReverse = replaceAll(secondReverse, temp, secondString);

		outputDiv.innerHTML = finalReverse;
		reverseBt.value = "원상태로";
	}
	
}


//똑같은 문자 전부 바꾸기
function replaceAll(string, searchStr, replaceStr) {
	return string.split(searchStr).join(replaceStr);
}
