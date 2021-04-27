window.onload=function() {
    noticeTable = document.getElementsByClassName("noticeTable")[0];
    mainscreen = document.getElementsByClassName("mainScreen")[0]
    lists = document.getElementsByClassName("lists")[0]
    noticeWrap = document.getElementsByClassName("noticeWrap")[0]
    updateWrap = document.getElementsByClassName("updateWrap")[0]
    detailPage = document.getElementsByClassName("detailPage")[0]
    updateDate = document.getElementsByClassName("updateDate")
    updateDateInfo = document.getElementsByClassName("updateDateInfo")
    updateContent = document.getElementsByClassName("updateContent")
    ruleWrap = document.getElementsByClassName("ruleWrap")[0]
    
    /*
    //데이터 연결
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			noticeDataText =this.responseText;
		}
	};
	
	xhttp.open("GET", "http://www.physics91.com/serverData/notice/get?pageIndex=1&limitCount=10", true);
	xhttp.send();	
    
    //업데이트 데이터 연결
	xhttp2 = new XMLHttpRequest();
	xhttp2.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			updateDataText =this.responseText;
		}
	};
	
	xhttp2.open("GET", "http://www.physics91.com/serverData/updateLog/get?pageIndex=1&limitCount=15", true);
	xhttp2.send();	
    
     //서버 법전 데이터
	xhttp3 = new XMLHttpRequest();
	xhttp3.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			ruleDataText =this.responseText;
		}
	};
	
	xhttp3.open("GET", "http://www.physics91.com/serverData/serverLaw/get?pageIndex=1&limitCount=15", true);
	xhttp3.send(); */
}

//데이터 연결 함수

function dataLoad(url,request) {
	http = new XMLHttpRequest();
	http.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let dataText =this.responseText;
            return dataText; 
		}
	};
	
	http.open("GET", url, true);
	http.send();
}



//공지 데이터 연결하기
function noticeData() {
    
	let json = JSON.parse(noticeDataText);
	let data = json.data;
            
    for (index in data) {
        
        let noticeData = data[index];
        let indexNum = Number(index);
        let tableNum = noticeTable.rows.length;
        let inputNum = tableNum-indexNum-1;
        
        let createDate= noticeData.createDate;
        let dateSplit = createDate.split(" ");
        
        
        noticeTable.rows[inputNum].cells[0].innerHTML = noticeData.id;
        noticeTable.rows[inputNum].cells[1].innerHTML = noticeData.title;
        noticeTable.rows[inputNum].cells[2].innerHTML = dateSplit[0];
    }
}

/*공지사항 눌렀을 때*/
function notice() {
    mainscreen.style.display = "none";
    lists.style.display = "none";
    updateWrap.style.display = "none";
    ruleWrap.style.display = "none";
    document.getElementsByClassName("wrap")[0].style.height = "1000px";
    
    
    noticeWrap.style.display = "block";
}

//home버튼 눌렀을때
function home() {
    mainscreen.style.display = "block";
    lists.style.display = "block";
    
    noticeWrap.style.display = "none";
    detailPage.style.display = "none";
    updateWrap.style.display = "none";
    ruleWrap.style.display = "none";
}

//상세페이지
function detailPage() {
    NoticeboardWrap.style.display = "none";
    detailPage.style.display = "block"; 
}

//업데이트 눌렀을 때
function update() {
    mainscreen.style.display = "none";
    lists.style.display = "none";
    updateWrap.style.display = "block";
    noticeWrap.style.display = "none";
    ruleWrap.style.display = "none";
}

//업데이트 데이터 연결하기 
function updateData() {
	let json = JSON.parse(updateDataText);
	let data = json.data;
            
    for (index in data) {
        
        let updateData = data[index];
        let indexNum = Number(index);
        
        let createDate= updateData.createDate;
        let dateSplit = createDate.split(" ");
        
        updateDate[indexNum].innerHTML = dateSplit[0];
        updateDateInfo[indexNum].innerHTML = updateData.title;
        updateContent[indexNum].innerHTML = updateData.content;
    }
}

//서버법전 눌렀을 때
function rule() {
    mainscreen.style.display = "none";
    lists.style.display = "none";
    updateWrap.style.display = "none";
    ruleWrap.style.display = "block";
    
    document.getElementsByClassName("wrap")[0].style.height = "1000px";
}

//서버 법전 데이터 연결하기 
function ruleData() {
	let json = JSON.parse(ruleDataText);
	let data = json.data;
            
    for (index in data) {
        
        let ruleData = data[index];
        let indexNum = Number(index);
                
        document.getElementsByClassName("ruleNum")[indexNum].innerHTML = ruleData.id + ".";
        document.getElementsByClassName("ruleContent")[indexNum].innerHTML = ruleData.title;
        document.getElementsByClassName("rulePunish")[indexNum].innerHTML = "- " + ruleData.content;
    }
}

//로그인 기능
function login() {
	document.getElementsByClassName("loginWrap")[0].style.display = "block";
}

window.onclick = function(event) {
	if (event.target == document.getElementsByClassName("loginWrap")[0]) {
		document.getElementsByClassName("loginWrap")[0].style.display = "none";
		document.body.style.overflow = "";
    }
}


//서버 법전 detail hover 효과

function ruleDetail() {
    document.getElementsByClassName("ruleDetail")[0].style.display = "block";
}

function ruleDetailOut() {
    document.getElementsByClassName("ruleDetail")[0].style.display = "none";
}
