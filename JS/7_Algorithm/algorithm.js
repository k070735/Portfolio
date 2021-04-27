function clean() {
	document.getElementById("input").value="";
	document.getElementById("output").innerHTML="";
}

/*1. 최대값 출력기*/
function output() {
	newarr = new Array();	 //새 배열 선언 (숫자화 목록)
	
	let input_num = document.getElementById("input").value;		 //value 갖고오기
	
	if (input_num == "") { 				//만약 아무것도 입력하지 않으면 입력하라고 경고
		alert('수를 입력해주세요!');
	}
	
	else {								//제대로 입력했을 때 실행
		let arr = input_num.split(" ")  // 공백 기준 스플릿 한거 arr에 저장

		let newarr = intlization(arr);  //int화

		let max = find_max(newarr);  //max값이랑 인덱스 값
		let pos = newarr.indexOf(max)
				
		document.getElementById("output").innerHTML = '최대값은 ' + (pos+1) + '번째 수 ' + max + "입니다!"  ;  //출력
	}
}



/*2. 최대,최소값 출력기*/
function output3() {
	newarr2 = new Array(); //새 배열 선언
	
	let input_num2 = document.getElementById("input3").value; //value 갖고오기
	
	if (input_num2 == "") {		//만약 아무것도 입력하지 않으면 입력하라고 경고
		alert('수를 입력해주세요!')
	}
	
	else {
		let arr = input_num2.split(" ")  // 공백 기준 스플릿 한거 arr에 저장

		let newarr2 = intlization(arr);		//int화

		let max = find_max(newarr2);
		let min = find_min(newarr2);
		let pos1 = newarr2.indexOf(max);		//min, max랑 인덱스값
		let pos2 = newarr2.indexOf(min);

		
		
		document.getElementById("output3").innerHTML = '최대값은 ' + (pos1+1) + '번째 수 ' + max + "입니다!" + '<br>' + '최소값은 ' + (pos2+1) + '번째 수 ' + min + "입니다!"; //출력
	}
}




/*3. 성적 조작기*/
function output2() {
	scorearr = new Array();		//배열 선언 ()
	new_scorearr = new Array();		//int화 후 담을 배열
	
	let sub_num = document.getElementById("input1").value;		//value 값
	let score = document.getElementById("input2").value;
	
	if (sub_num == "" || score == "") {		//만약 아무것도 입력하지 않으면 입력하라고 경고
		alert('제대로 입력해주세요!')
	}
	
	else {
		let score_arr = score.split(" ")		//스플릿
		let new_subnum = parseInt(sub_num)		//따로 int화

		let scorearr = intlization(score_arr);		//공동함수 int화

		let max = find_max(scorearr);	//성적 중 가장 큰 값 찾기
		
		for (var i = 0; i<scorearr.length; i++) {		//나머지 성적 조작하기
			new_scorearr[i] = (scorearr[i] / max)*100
		}
		
		let newavr = sum(new_scorearr)/new_subnum		//새로운 평균 도출  ->> sum함수
		
		document.getElementById("output2").innerHTML = "바뀐 평균 : " + newavr; 	//출력
	}
}

/*sum 함수*/
function sum(arr) {
	var result = 0;
	
	for (var i = 0; i<arr.length; i++) {
		result += arr[i];
	}
	
	return result;
}


/*int화 공동함수*/
function intlization(array) {  
	otherarr = new Array;
	for (var i=0; i< (array.length); i++) {
		let number = parseInt(array[i]);
		otherarr.push(number);
	}
	return otherarr
}

function find_max(array) {
	let len = array.length;
	let max_num = array[0];
	for (var i=0; i<len; i++) {
		if (max_num < array[i]) {
			max_num = array[i]
		}
	}
	return max_num
}

function find_min(array) {
	let len = array.length;
	let min_num = array[0];
	for (var i=0; i<len; i++) {
		if (min_num > array[i]) {
			min_num = array[i]
		}
	}
	return min_num
}
