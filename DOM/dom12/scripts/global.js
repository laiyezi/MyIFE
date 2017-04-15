//添加事件
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function'){
		window.onload = func;
	} else {
		window.onload = function(){
			oldonload();
			func();
		} 
	}
}
// 在指定元素之后添加元素
function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement){
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
// 给元素标签添加class
function addClass(element,value){
	if (!element.className){
		element.className = value;
	} else {
		newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
}

// 突出显示当前页面的导航连接
function highLightPage(){
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    var headers = document.getElementsByTagName("header");
    if (headers.length == 0) return false;
    var navs = headers[0].getElementsByTagName("nav");
    if (navs.length == 0) return flase;
    //取得导航连接，循环遍历
    var links = navs[0].getElementsByTagName("a");
    var linkurl;
    for (var i=0; i<links.length; i++){
    	// 取得导航连接的href属性
    	linkurl = links[i].getAttribute("href");
    	// 检查当前页面的url是否在导航连接中
    	if (window.location.href.indexOf(linkurl) != -1){
    		links[i].className = "here";
    		//取得链接文本，并将其小写
    		var linktext = links[i].lastChild.nodeValue.toLowerCase();
    		// 跟当前body设置id属性为当前链接文本
    		document.body.setAttribute("id",linktext);
    	}
    }
}
addLoadEvent(highLightPage);

//移动元素到指定位置
function moveElement(elementID,final_x,final_y,interval){
	if (!document.getElementById) return false;
	if (!document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
	if (!elem.style.position) {
		elem.style.position = "absolute";
	}
	if (!elem.style.left) {
		elem.style.left = "0px";
	}
	if (!elem.style.top) {
		elem.style.top = "0px";
	}
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos == final_x && ypos == final_y){
		return true;
	}
	if (xpos < final_x){
		var dist = Math.ceil((final_x - xpos)/10);
		xpos = xpos + dist;
	}
	if (xpos > final_x){
		var dist = Math.ceil((xpos - final_x)/10);
		xpos = xpos - dist;
	}
	if (ypos < final_y){
		var dist = Math.ceil((final_y - ypos)/10);
        ypos = ypos + dist;
	}
	if (ypos > final_y){
		var dist = Math.ceil((ypos - final_y)/10);
		ypos = ypos - dist;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	elem.movement = setTimeout(repeat,interval);
}

// 添加图片显示区
function prepareSlideshow(){
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("intro")) return false;

	var intro = document.getElementById("intro");
	var slideshow = document.createElement("div")
	slideshow.setAttribute("id","slideshow");

	var frame = document.createElement("img");
	frame.setAttribute("src","images/frame.jpg");
	frame.setAttribute("alt","");
	frame.setAttribute("id","frame");
	slideshow.appendChild(frame);

	var preview = document.createElement("img");
	preview.setAttribute("src","images/slideshow.gif");
	preview.setAttribute("alt","a glimpse of what awaits you");
	preview.setAttribute("id","preview");
	slideshow.appendChild(preview);
	insertAfter(slideshow,intro);
	//这两个的区别一个是<p>里的链接，一个是所有链接
	// var links = intro.getElementsByTagName("a");
	var links = document.getElementsByTagName("a");
	var destination;
	for (var i=0; i<links.length; i++){
		links[i].onmouseover = function(){
			destination = this.getAttribute("href");
			if (destination.indexOf("index.html") != -1){
				moveElement("preview",0,0,5);
			}
			if (destination.indexOf("about.html") != -1){
				moveElement("preview",-150,0,5);
			}
			if (destination.indexOf("photos.html") != -1){
				moveElement("preview",-300,0,5);
			}
			if (destination.indexOf("live.html") != -1){
				moveElement("preview",-450,0,5);
			}
			if (destination.indexOf("contact.html") != -1){
				moveElement("preview",-600,0,5);
			}
		}
	}
}
addLoadEvent(prepareSlideshow);
//修改每个部分的display样式属性
function showSection(id){
	var sections = document.getElementsByTagName("section");
	for (var i=0; i<sections.length; i++){
		if (sections[i].getAttribute("id") != id){
			sections[i].style.display = "none";
		} else {
			sections[i].style.display = "block";
		}
	}
}
//为导航添加onclick属性，点击显示相应的setion,详细介绍
function prepareInternalnav(){
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	var articles = document.getElementsByTagName("article");
	if (articles.length == 0) return false;
	var navs = articles[0].getElementsByTagName("nav");
	if (navs.length == 0) return false;
	var nav = navs[0];
	var links = nav.getElementsByTagName("a");
	for (var i=0; i<links.length; i++){
		//href的值为#jay,#domsters,用split进行分割，得到jay,domsters
		var sectionId = links[i].getAttribute("href").split("#")[1];
		if (!document.getElementById(sectionId)) continue;
		//将相对应的id元素设置隐藏
		document.getElementById(sectionId).style.display = "none";
        //为链接添加名为destination的属性，值为sectionId
		links[i].destination = sectionId;
		links[i].onclick = function(){
			showSection(this.destination);
			return false;
		}
	}
}
addLoadEvent(prepareInternalnav);

function showPic(whichpic){
	// 展示图片
	if (!document.getElementById("placeholder")) return true;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	// 展示文本
	if (!document.getElementById("description")) return false;
	if (whichpic.getAttribute("title")){
		var text = whichpic.getAttribute("title");
	} else {
		var text = "";
	}
	var description = document.getElementById("description");
	if (description.firstChild.nodeType == 3){
		description.firstChild.nodeValue = text;
	}
	return false;
}
// 创建图片显示区域
function preparePlaceholder(){
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/placeholder.jpg");
	placeholder.setAttribute("alt","my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id","description");
	var desctext = document.createTextNode("Choose an image");
	description.appendChild(desctext);
	var gallery = document.getElementById("imagegallery");
	insertAfter(description,gallery);
	insertAfter(placeholder,description);
}
//给链接添加onclick事件，显示图片
function prepareGallery(){
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i=0; i<links.length; i++){
		links[i].onclick = function(){
			return showPic(this);
		}
	}
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);

//隔行添加名为odd的class
function stripeTables(){
	if (!document.getElementsByTagName) return false;
	var tables = document.getElementsByTagName("table");
	for (var i=0; i<tables.length; i++){
		var odd = false;
		var rows = tables[i].getElementsByTagName("tr");
		for (var j=0; j<rows.length; j++){
			if (odd == true){
				addClass(rows[j],"odd");
				odd = false;
			} else {
				odd = true;
			}
		}
	}
}
//添加onmouse事件，突出显示
function highlightRows(){
	if (!document.getElementsByTagName) return false;
	var rows = document.getElementsByTagName("tr");
	for (var i=0; i<rows.length; i++){
		rows[i].oldClassName = rows[i].className;
		rows[i].onmouseover = function(){
			addClass(this,"highlight");
		}
		rows[i].onmouseout = function(){
			this.className = this.oldClassName;
		}
	}
}
//创建abbr展示区域，简写及详细
function displayAbbreviations(){
	if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
	var abbreviations = document.getElementsByTagName("abbr");
	if (abbreviations.length < 1) return false;
	var defs = new Array();
	for (var i=0; i<abbreviations.length; i++){
		var current_abbr =abbreviations[i];
		if (current_abbr.childNodes.length < 1) continue;
		var difinition = current_abbr.getAttribute("title");
		var key = current_abbr.lastChild.nodeValue;
		defs[key] = definition;
	}
	var dlist = document.createElement("dl");
	for (key in defs) {
		var definition = defs[key];
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if (dlist.childNodes.length < 1) return false;
	var header = document.createElement("h3");
	var header_text = document.createTextNode("abbreviations");
	header.appendChild(header_text);
	var articles = document.getElementsByTagName("article");
	if (articles.length == 0) return false;
	var container = articles[0];
	container.appendChild(header);
	container.appendChild(dlist);
}

addLoadEvent(stripeTables);
addLoadEvent(highlightRows);
addLoadEvent(displayAbbreviations);

// 浏览器大部分支持，label标签的for属性默认点击文本，关联的表字段获得焦点
// 如果不支持默认行为，为label添加onclick事件，单击label中的文本，关联的表单字段获得焦点
function focusLabels(){
	if (!document.getElementsByTagName) return false;
	// 获得所有label标签
	var labels = document.getElementsByTagName("label");
	// 遍历label标签
	for (var i=0; i<labels.length; i++){
		// label标签无for属性，跳过
		if (!labels[i].getAttribute("for")) continue;
		//添加onclick事件
		labels[i].onclick = function(){
			// 获得label标签的for属性值
			var id = this.getAttribute("for");
			// 没有对应的id标签，返回
			if (!document.getElementById("id")) return;
			// 获取id相对应的元素
			var element = document.getElementById(id);
			element.focus();
		}
	}
}
addLoadEvent(focusLabels);

//如果浏览器不支持placeholder占位符属性，下面的函数可实现相同功能
//字段获得焦点时，删除字段的value，用户没有输入且离开时，重新使用占位符并将其作为字段的value
function resetFields(whichform){
	if (Modernizr.input.placeholder) return;
	// 遍历所有表单元素
	for (var i=0;i<whichform.elements.length; i++){
		var element = whichform.elements[i];
		//跳过submit标签
		if (element.type =="submit") continue;
		// 获得标签placeholder属性值
		var check = element.placeholder || element.getAttribute("placeholder");
		if (!check) continue;
		// 获得焦点时，value设为空
		element.onfocus = function(){
			var text = this.placeholder || this.getAttribute("placeholder");
			if (this.value == text){
				this.className = "";
				this.value = "";
			}

		}
		// onblur时，设置value为placeholder的值
		element.onblur = function(){
			if (this.value == ""){
				this.className = "placeholder";
				this.value = this.placeholder || this.getAttribute("placeholder");
			}
		}
		elemnet.onblur();//默认应用占位符
	}
}
//遍历文档中的所有form对象
function prepareForms(){
	for (var i=0; i<document.forms.length; i++){
		var thisform = document.forms[i];
		resetFields(thisform);
		//提交表单时，通过onsubmit事件调用下面的验证函数
		thisform.onsubmit = function(){
			// 如果表单验证没通过，返回false，不能提交表单
			if (!validateForm(this)) return false;
			var article = document.getElementsByTagName("article")[0];
			// 如果submitFormWithAjax函数发送Ajax成功，则submit事件处理函数返回false，阻止浏览器重复提交
			if (submitFormWithAjax(this, article)) return false;
			// 如果submitFormWithAjax函数发送Ajax失败，则submit事件处理函数返回true，让表单想什么都没有发生一样继续通过页面提交
			return true;

		}
	}
}
addLoadEvent(prepareForms);

//检查有无输入内容
function isFilled(field){
	if (field.value.replace(" ","").length == 0) return false;
	var placeholder = field.placeholder || field.getAttribute("placeholder");
	return (field.value != placeholder);
}
// 检查邮箱
function isEmail(field){
	return (field.value.indexOf("@") != -1 && field.value.indexOf(".") != -1);
}
//检查form内表单元素是否填写
function validateForm(whichform){
	for (var i=0; i<whichform.elements.length; i++){
		var element = whichform.elements[i];
		
		if (element.required == "required"){
			if (!isFilled(element)){
				alert("Please fill in the "+element.name+"field.");
				return false;
			}
		}

		if (element.type == "email"){
			if (!isEmail(element)){
				alert("The "+element.name+" field must be a valid email address.");
				return false;
			}
		}
	}
	// 通过验证返回true
	return true;
}

function getHTTPObject(){    
    if (typeof XMLHttpRequest == "undefined") 
    XMLHttpRequest = function(){
    	try {return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
    	    catch (e){}
    	try {return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
    	    catch (e){}
    	try {return new ActiveXObject("Msxml2.XMLHTTP");}
    	    catch (e){}
    	return false;
    }
    return new XMLHttpRequest();
}	
//删除目标元素的子元素，并添加子元素img显示loading.gif
function displayAjaxLoading(element){
	while (element.hasChildNodes()){
		element.removeChild(element.lastChild);
	}
	var content = document.createElement("img");
	content.setAttribute("src","images/loading.gif");
	content.setAttribute("alt","Loading...");
	element.appendChild(content);
}

function submitFormWithAjax(whichform, thetarget){
	var request = getHTTPObject();
	if (!request) return false;
	displayAjaxLoading(thetarget);
	var dataParts = [];
	var element;
	for (var i=0; i<whichform.elements.length; i++){
		element = whichform.elements[i];
		dataParts[i] = element.name + "=" + encodeURIComponent(element.value);
	}
	var data = dataParts.join("&");
	request.open("POST", whichform.getAttribute("action"), true);
	request.setRequestHeader("Content-type","application/x-www-form-urlencoded");

	request.onreadystatechange = function(){
		if (request.readyState == 4){
			if (request.status == 200 || request.status == 0){
				var matches = request.responseText.match(/<article>([\s\S]+)<\/article>/);
				if (matches.length > 0){
					thetarget.innerHTML = matches[1];
				} else {
					thetarget.innerHTML = "<p>0ops, there was an error. Sorry.</p>";
				}
			} else {
				thetarget.innerHTML = "<p>" + request.statusText + "</p>";
			}
		}
	};
	request.send(data);
	return true;
};
//,使用蓝灯翻墙，使用的谷歌的Closure Compiler压缩代码，网址http://closure-compiler.appspot.com/home