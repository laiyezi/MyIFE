function getNewContent(){
    var request = getHTTPObject();
    
    if (request) {
        request.open("GET", "example.txt", true);
        request.onreadystatechange = function(){
            //readyState属性值的5种可能：
            // 0表示为初始化
            // 1表示正在加载
            // 2表示加载完毕
            // 3表示正在交互
            // 4表示完成
        	if (request.readyState == 4) {
                alert("Response Received");
                
        		var para = document.createElement("p");
        		var txt = document.createTextNode(request.responseText);
        		para.appendChild(txt);
        		document.getElementById("new").appendChild(para);
        	}
        };
        request.send(null);
    } else {
    	alert("Sorry, your browser doesn't support XMLHTTPRequest");
    }
    alert("Funtion Done");
}
addLoadEvent(getNewContent);