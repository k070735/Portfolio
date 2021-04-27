//element 정의
window.onload = function() {
	frame = document.getElementById("frame") ; 
	changebt = document.getElementById("changebt");
	back = document.getElementById("back");
	forward = document.getElementById("forward");
}


//src 바꾸기 함수
function changeUrl() {	
	
	//사이트에 따라 버튼내용 바꾸는 기능
	
	//1. icampus 사이트면
	if (frame.src == "https://icampus.skku.edu/") {
		
		//홈페이지로 이동
		frame.src = "https://www.skku.edu/skku/index.do";
		//다음은 아이캠퍼스로 이동할 수 있게 내용 바꾸기
		changebt.value = "icampus";
	}
	
	//2. 홈페이지면
	else {
		//아이캠퍼스로 이동
		frame.src = "https://icampus.skku.edu/";
		//다음은 홈페이지로 이동할 수 있게 내용 바꾸기
		changebt.value = "home";
		
	}
}

