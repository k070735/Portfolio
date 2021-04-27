/*인덱스 찾기 함수*/
function output() {
	
	//입력한 문자열 가지고 오기
	let inputArray = document.getElementById("inputArray").value;		 

	let stringFind = document.getElementById("stringFind").value;

	
	//찾고자 하는 문자열이 있으면 찾고
	
	if (inputArray=="" || stringFind == "") {
		alert('제대로 입력해주세요!')
	}
	
	else if (inputArray.indexOf(stringFind) != -1) {
		
		let pos = inputArray.indexOf(stringFind);
		
		//결과창 출력
		document.getElementById("output").innerHTML = stringFind+ '는 ' + (pos+1) + '번째에 있습니다!'  ;  //출력
		
		//초기화 버튼 보이기
		document.getElementById("clearBt").style.display = "block";
		document.getElementById("outputMent").style.display = "block";
	}
	
	//없으면 경고창
	
	else {
		alert("찾지 못했습니다!");
	}

}

/*초기화버튼*/
function cleaner() {
	
	document.getElementById("clearBt").style.display = "none"
	document.getElementById("outputMent").style.display = "none";
	document.getElementById("output").innerHTML = "";
	document.getElementById("inputArray").value="";
	document.getElementById("stringFind").value="";
}
