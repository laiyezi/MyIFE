//展示图片
function showPic(whichpic){
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
    
    //DOMLevel 1 也可以
	// placeholder.src = source; 
    
    //获取<a>标签的title
	var text = whichpic.getAttribute("title");

	//获取id为description的元素标签<p>
    var description = document.getElementById("description");
    
    //node.childNodes[0] 等价 node.firstChild
    //node.childNodes[node.childNodes.length-1] 等价 node.lastChild
    //把text赋值给<p>元素的第一个子元素的value
    description.firstChild.nodeValue = text;
}


//获取body元素的子元素个数
function countBodyChildren(){
	//获取所有的body元素中第一个也是唯一一个body元素
	var body_element = document.getElementsByTagName("body")[0];
 
	//获取body元素的子元素个数，元素节点，文本节点，甚至标点符号，换行符，空格
	alert (body_element.childNodes.length);//15

   //获取body元素的nodeType属性
    // 元素节点的nodeType:1
    // 属性节点的nodeType:2
    // 文本节点的nodeType:3;
    alert(body_element.nodeType);//1

}

//页面加载时执行countBodyChildren函数
window.onload = countBodyChildren;