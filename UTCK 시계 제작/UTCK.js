window.onload = function() {
    setInterval(function(){
        let date = new Date();
        
        document.getElementsByClassName("clock")[0].textContent=convert(2, date.getHours())+":"+convert(2,date.getMinutes())+":"+convert(2,date.getSeconds())+" "+convert(3,date.getMilliseconds());
    }, 1)
}

function convert(num, value) {
    let len = value.toString().length;
    let gap = num-len;
    
    var temp = ""
    
    for(var i=0; i < gap; i++){
        temp += "0"
    }
    var h = temp + value
    return h;
}
