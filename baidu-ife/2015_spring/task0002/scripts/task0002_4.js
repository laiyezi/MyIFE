var suggestData = ['able', 'a', 'alibaba','abanada', 'zilaiye', 'gangshou', 'huoying', 'mingren', 'kakaxi', 'zuozhu', 'xiaoying', 'kuiba', 'manji', 'haizeiwang', 'lufei'];

var inputArea = $("input");
var ulArea = $("div ul");

addInputListener();//监听input,提示搜索建议
clickLi();//鼠标点击，悬停
keydownLi();//键盘事件，up,down,enter


// --------------------------------事件监听，展示搜索建议---------------------------------
// 给input添加监听事件
function addInputListener() {
	if (inputArea.addEventListener) {
		inputArea.addEventListener("input", OnInput);
	}
	if (inputArea.attachEvent) {//IE浏览器兼容
		inputArea.attachEvent("onpropertychange", onPropChanged);
	}
} 
// 监听事件触发 展示搜索 函数
function OnInput(event) {//应该加一个去除输入字符串的前后空格trim()
	var inputValue = trim(event.target.value);//得到输入数据
	handleInput(inputValue);//根据输入数据提供搜索建议
}
// IE浏览器兼容
function OnPropChanged(event) {
	var inputValue = "";
	if (event.propertyName.toLowerCase() == "value") {
		inputValue = trim(event.srcElement.value);
		handleInput(inputValue);
	}
}

//提示搜索区域
function handleInput(inputValue) {
	// console.log(inputValue);
	var liString = "";
	var pattern = new RegExp("^" + inputValue, "i");//根据输入创建正则

	if (inputValue === "") {//输入为空，提示区域不显示
		ulArea.style.display = "none";
	} else {
		for (var i = 0; i < suggestData.length; i++) {//遍历数据库，匹配搜素项，创建li标签
			if (suggestData[i].match(pattern)) {
				// console.log(suggestData[i]);
				//提示字符串由匹配部分 + 未匹配部分
				liString += "<li><span>" + inputValue + "</span>" + suggestData[i].substr(inputValue.length) + "</li>";
			}
		}
		ulArea.innerHTML = liString;
		ulArea.style.display = "block";

	}
}




// --------------------------鼠标悬停，点击事件-----------------------------------------------
//删除所有li标签的className属性
function removeLiClass() {
	var li = ulArea.getElementsByTagName('li');
	for (var i = 0; i < li.length; i++) {
		li[i].className = "";
	}
}
// 删除span标签，得到完整字符串
function deleteSpan(string) {
	var pattern = /^<span>(\w+)<\/span>(\w+)$/;
	var stringArr = string.match(pattern);
	return stringArr[1] + stringArr[2];//span标签内的字符串加上后面的字符串
}

// 鼠标悬停，点击事件
function clickLi() {
	// console.log("clickLi");
	delegateEvent(ulArea, "li", "mouseover", function() {
		removeLiClass();
		addClass(this, "active");
	});
	delegateEvent(ulArea, "li", "mouseout", function() {
		
		removeClass(this, "active");
	});
	delegateEvent(ulArea, "li", "click", function() {
		inputArea.value = deleteSpan(this.innerHTML);
		ulArea.style.display = "none";
	});
}




// -----------------------up,down,enter事件------------------------------

// input聚焦时，触发键盘事件，上下移动，enter确认
function keydownLi() {
	addEvent(inputArea, "keydown", function(event) {
		var highLightLi = $(".active");
		// console.log(highLightLi);
		//down
		if (event.keyCode == 40) {
			if (highLightLi) {
				var nextLi = highLightLi.nextSibling;
				if (nextLi) {
					removeClass(highLightLi, "active");
					addClass(nextLi, "active");
				}
			} else {
				addClass($("li"), "active");
			}
		}
		//up
		if (event.keyCode == 38) {
			if (highLightLi) {
				var preLi = highLightLi.previousSibling;
				if (preLi) {
					removeClass(highLightLi, "active");
					addClass(preLi, "active");
				}
			} else {
				addClass($("li"), "active");
			}
		}
		//enter
		if (event.keyCode == 13) {
			if (highLightLi) {
				inputArea.value = deleteSpan(highLightLi.innerHTML);
				ulArea.style.display = "none";
			}
		}
	});
}


