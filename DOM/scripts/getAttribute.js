//获取所有p元素
var paras = document.getElementsByTagName("p");

//得到每个p元素的title属性
for(var i = 0; i < paras.length; i++){

	var titles=paras[i].getAttribute("title");
	//如果p元素title属性存在，alert,不存在是null.

	if(titles){
		alert(titles);
	}
}