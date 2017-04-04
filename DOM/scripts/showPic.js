//展示图片
function showPic(whichpic){
    if(!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
    if(placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src",source);
    
    //DOMLevel 1 也可以
	// placeholder.src = source; 
    
    
    if(document.getElementById("description")){
        //在图片下方显示点击图片的title属性值
        //获取被点击图片链接的<a>标签的title属性值,运用三元运算符，不存在为空
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";

        //获取id为description的元素标签<p>
        var description = document.getElementById("description");
        
        //node.childNodes[0] 等价 node.firstChild
        //node.childNodes[node.childNodes.length-1] 等价 node.lastChild
        //把text赋值给<p>元素的第一个子元素，文本节点
        //检查description元素的第一个子元素是文本节点
        if(description.firstChild.nodeType == 3){
            description.firstChild.nodeValue = text;
        }  
    }
    return true;

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


//<a>标签onclick事件
function prepareGallery(){
    
    //检查浏览器是否理解getElementByTagName和getElementById
    if(!document.getElementsByTagName){
        return false;
    }
    if(!document.getElementById){
        return false;
    }
    //检查网页是否存在一个id为imagegallery的元素
    if(!document.getElementById("imagegallery")){
        return false;
    }

    //获取id为imagegallery的元素
    var gallery = document.getElementById("imagegallery");
    //获取imagegallery元素的所有链接
    var links = gallery.getElementsByTagName("a");

    //遍历links数组里的各个元素
    for(var i = 0; i < links.length; i++){
        //为每个a元素添加onclick事件，在当前页面中展示所点击图片
        links[i].onclick = function(){
            //如果showPic返回true,此为false，浏览器不会打开连接
            //如果showPic返回false,图片更新没成功，返回true允许打开图片链接
            return showPic(this) ? false : true;
        }
    }
}


function addLoadEvent(func) {
    //把现有的window.onload事件处理函数的值存入变量oldonload
    var oldonload = window.onload;
    //如果还没有绑定任何函数，就把新函数添加给他
    if(typeof window.onload != 'function') {
        window.onload = func;
    } else {
        //如果已经绑定了函数，就把新函数追加到现有指令末尾
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

//把需要执行的函数添加到对队列当中
//addLoadEvent(countBodyChildren);
addLoadEvent(prepareGallery);