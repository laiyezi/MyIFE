// window.onload = function(){
// 	var testdiv = document.getElementById("testdiv");
// 	testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>";
// }

window.onload = function(){
	//创建p元素
	var para = document.createElement("p");
	// var info = "nodeName:";
	// info += para.nodeName;
	// info += " nodeType:";
    // info += para.nodeType;
    // alert(info);
    

    //创建文本节点
    var txt = document.createTextNode("Hello World!");

    //为p元素插入文本节点txt
    para.appendChild(txt);
    
    //得到id为testdiv的元素
    var testdiv = document.getElementById("testdiv");
    //为testdiv插入子元素<p>
    testdiv.appendChild(para);

}


window.onload = function(){
	var para = document.createElement("p");
	var txt1 = document.createTextNode("This is ");
	var emphasis = document.createElement("em");
	var txt2 = document.createTextNode("my");
	var txt3 = document.createTextNode(" content");
	para.appendChild(txt1);
	emphasis.appendChild(txt2);
	para.appendChild(emphasis);
	para.appendChild(txt3);
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
}