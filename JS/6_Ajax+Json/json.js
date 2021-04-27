window.onload = function() {
	data = document.getElementsByClassName("data")[0];
	
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			a=this.responseText;
			document.getElementsByClassName("data")[0].innerHTML = a;
		}
	};
	
	xhttp.open("GET", "http://www.physics91.com/serverData/notice/get?pageIndex=1&limitCount=10", true);
	xhttp.send();	
}

function show() { /* 위에서 정의해두기 */
	if (data.style.display =="block") {
		data.style.display = "none"
	}
	else {
		data.style.display = "block"
	}
}

function b() { /* 매개변수로 a 끌어다 쓰기*/
	let json = JSON.parse(a)
	let data = json.data
	
	for(index in data){
		let deco = data[index];
	
		document.getElementById("id").innerHTML += JSON.stringify(deco.id)+'<br/>';
		document.getElementById("name").innerHTML += JSON.stringify(deco.label)+'<br/>';
		document.getElementById("type").innerHTML += JSON.stringify(deco.type)+'<br/>';
	}
}

