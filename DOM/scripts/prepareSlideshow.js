
function prepareSlideshow(){
	//检测方法
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
    //检测元素
    if (!document.getElementById("linklist")) return false;
    //创建div元素及id
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    //创建img元素及其src,alt,id属性
    var preview = document.createElement("img");
    preview.setAttribute("src","img/huoying.jpg");
    preview.setAttribute("alt","building blocks of web design");
    preview.setAttribute("id","preview");
    // 把img插入div
    slideshow.appendChild(preview);
    //把div插入列表后面
    var list = document.getElementById("linklist");
    insertAfter(slideshow,list);
    // //设置图片位置
    // var preview = document.getElementById("preview");
    // // preview.style.position = "absolute";
    // //出现在容器元素id为slideshow的div的左上角
    // preview.style.left = "0px";
    // preview.style.top = "0px";
    // //取得链接
    // var list = document.getElementById("linklist");
    var links = list.getElementsByTagName("a");
    //为每个链接 添加鼠标事件
    links[0].onmouseover = function(){
    	moveElement("preview",-100,0,10);
    }
    links[1].onmouseover = function(){
    	moveElement("preview",-200,0,10);
    }
    links[2].onmouseover = function(){
    	moveElement("preview",-300,0,10);
    }
}

addLoadEvent(prepareSlideshow);