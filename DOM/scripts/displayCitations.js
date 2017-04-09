//创建文献来源连接表
function displayCitations() {
	if (!document.getElementsByTagName) return false;
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	//取得引用
	var quotes = document.getElementsByTagName("blockquote");
	//遍历引用
	for (var i = 0; i < quotes.length; i++) {
	    // 如果没有cite属性，继续下次循环
		if (!quotes[i].getAttribute("cite")) continue;
		// 保存cite属性
		var url = quotes[i].getAttribute("cite");
		//得到引用中的所有节点
		var quoteChildren = quotes[i].getElementsByTagName("*");
		// 如果没有节点，继续下次循环
		if (quoteChildren.length < 1) continue;
		// 得到引用中最后一个元素节点
		var elem = quoteChildren[quoteChildren.length - 1];
        
        // 创建标记
		var link = document.createElement("a");
		var link_text = document.createTextNode("source");
		link.appendChild(link_text);
		link.setAttribute("href",url)
		var superscript = document.createElement("sup");
		superscript.appendChild(link);
		
		// 将标记添加到引用中的最后一个元素节点
		elem.appendChild(superscript);

	}
}

addLoadEvent(displayCitations);