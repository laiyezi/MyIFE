//创建显示缩略语及其描述
function displayAbbreviations() {
    if (!document.getElementsByTagName) return false;
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;

	//得到所有abbr标签，缩略语
	var abbreviations = document.getElementsByTagName("abbr");
	if (abbreviations.length < 1) return false;
	var defs = new Array();
	for (var i = 0; i < abbreviations.length; i++) {
        var current_abbr = abbreviations[i];
        if (current_abbr.childNodes.length < 1) continue;
		//得到所有abbr标签的title属性
		var definition = abbreviations[i].getAttribute("title");
		//得到所有abbr标签中文本节点的值，即缩略语
		var key = abbreviations[i].lastChild.nodeValue;
		//创建数组，缩略语为键，详细title描述为值
		defs[key] = definition;
	}

//创建定义列表
var dlist = document.createElement("dl");
//遍历数组键(下标)
for (key in defs) {
	
	var definition = defs[key];
	
    //创建dt元素和相应的文本节点，定义标题
	var dtitle = document.createElement("dt");
	var dtitle_text = document.createTextNode(key);
	dtitle.appendChild(dtitle_text);

    // 创建dd元素和相应的文本节点，定义描述
	var ddesc = document.createElement("dd");
	var ddesc_text = document.createTextNode(definition);
	ddesc.appendChild(ddesc_text);
    	
	dlist.appendChild(dtitle);
	dlist.appendChild(ddesc);
}
if (dlist.childNodes.length < 1) return false;
//给列表创建标题
var header = document.createElement("h2");
var header_text = document.createTextNode("Abbreviations");
header.appendChild(header_text);
//将标题和列表插入body中
document.body.appendChild(header);
document.body.appendChild(dlist);
}


// window.onload = displayAbbreviations;
addLoadEvent(displayAbbreviations);

