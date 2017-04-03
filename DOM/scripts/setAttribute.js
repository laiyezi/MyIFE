//获取id为purchases的元素
var shopping=document.getElementById("purchases");

//获取 id为purchases的元素 的title属性
alert(shopping.getAttribute("title"));

//修改元素的title属性值
shopping.setAttribute("title","a list of goods");

//获取元素的title属性
alert(shopping.getAttribute("title"));

//获取所有p元素
var paras = document.getElementsByTagName("p");

//遍历p元素
for(var i = 0; i < paras.length; i++){

    //获得p元素的title属性
	var title_text = paras[i].getAttribute("title");
    
    //判断title属性是否存在
    if(title_text){
    	//对存在title属性的 p元素，修改其title属性
    	paras[i].setAttribute("title","brand new title text");
    	alert(paras[i].getAttribute("title"));
    }	
}