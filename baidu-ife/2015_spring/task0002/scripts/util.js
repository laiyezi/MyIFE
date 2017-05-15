function isArray(arr) {
	// Object.prototype.toString().call()获取对象的类型
	return typeof (arr) === "object" && Object.prototype.toString.call(arr) === "[object Array]";
	// Array.isArray(arr);
}

function isFunction(fn) {
	return typeof fn === "function";

}


// 数字，字符串，布尔，日期  =可以直接赋值，值类型
// Array,Object 引用类型 =
// 实现深度复制
function cloneObject(src) {
	var result;
	// 对象类型，日期，数组，对象，日期可以直接赋值，对象和数组是引用赋值
	if (typeof(src)==="object") {
		if (Object.prototype.toString.call(src)==="[object Date]") {
			result = src;
		} else {
			result = (Object.prototype.toString.call(src)==="[object Array]")?[] : {};
			for (var i in src) {
				// 排除继承属性
				if (src.hasOwnProperty(i)) {
					if (typeof src[i] === "object") {
						result[i] = cloneObject(src[i]);//数组中的数组，对象中的对象，递归赋值
					} else {
						result[i] = src[i];
					}
				}
			}
		}
	} else {
		result = src;
	}
	return result;
}

// var srcObj = {
// 	a:1,
// 	b:{
// 		b1:["hello", "hi"],
// 		b2:"javaScript"
// 	}
// };
// var abObj = srcObj;
// var tarObj = cloneObject(srcObj);

// srcObj.a = 2;
// srcObj.b.b1[0] = "Hello";

// console.log(abObj.a);
// console.log(abObj.b.b1[0]);

// console.log(tarObj.a);
// console.log(tarObj.b.b1[0]);

// 数组去重
function uniqArray(arr) {
	var result = [];
	for (var i=0;i<arr.length;i++) {
		// 查找是否已经包含该元素，没有的话添加
		if (result.indexOf(arr[i]) === -1) {
			result.push(arr[i]);
		}
	}
	return result;
}


// 去除字符串首尾的的空格
function simpleTrim(str) {
	var result = "";
	//找到左边第一个非空格
	for (var i=0;i<str.length;i++) {
		if (str[i] != " "&& str[i] !="\t") {
			break;
		}
	}
	// 找到右边第一个非空格
	for (var j = str.length - 1; j >= 0; j--){
		if (str[j] != " " && str[j] != "\t")
			break;
	}
	// 截取左右空格的字符串
	result = str.slice(i, j+1);
	return result;
}

// 正则实现去除左右空格
function trim(str) {
	var result = "";
	result = str.replace(/^\s+|\s+$/g,"");
	return result;
}

// var str = '       hi !   ';
// str = trim(str);
// console.log(str);


// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，
// 并将数组索引和元素作为参数传递
function each(arr, fn) {
	for (var i=0; i<arr.length; i++){
		fn(arr[i], i);
	}
}
// var arr = ['java', 'c', 'php', 'html'];
// function output(item) {
// 	console.log(item);
// }
// each(arr, output);

// 获取对象里面第一层元素的数量
function getObjectLength(obj){
	var count = 0;
	// for...in..遍历对象属性 
	for (var i in obj){
		// 排除继承属性
		if (obj.hasOwnProperty(i)){
			count++;
		}
	}
	return count;
}


// 邮箱地址判断
function isEmail(emailStr) {
	var reg = /^(\w+\.)*\w+@\w+(\.\w+)+$/;
	return reg.test(emailStr);
}

// 手机号码判断
function isMobilePhone(phone) {
	var reg = /^1\d{10}$/;//1开头跟10个数字
	return reg.test(phone);
}


// 为element添加新的newClassName
function addClass(element,newClassName) {
	// 判断是否存在className属性，不存在直接添加
	if (!element.className) {
		element.className = newClassName;
	} else {
		var oldClassName = element.className;

		element.className = oldClassName + " " + newClassName;
	}
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
	var elements = element.className;
	var reg = new RegExp("\\b" + oldClassName + "\\b");
	element.className = trim(elements.replace(reg,""));
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
	return element.parentNode === siblingNode.parentNode;
}


// 1. clientHeight和clientWidth用于描述元素内尺寸，是指 元素内容+内边距 大小，不包括边框（IE下实际包括）、外边距、滚动条部分
// 2. offsetHeight和offsetWidth用于描述元素外尺寸，是指 元素内容+内边距+边框，不包括外边距和滚动条部分
// 3. clientTop和clientLeft返回内边距的边缘和边框的外边缘之间的水平和垂直距离，也就是左，上边框宽度
// 4. offsetTop和offsetLeft表示该元素的左上角（边框外边缘）与已定位的父容器（offsetParent对象）左上角的距离
// 5. offsetParent对象是指元素最近的定位（relative,absolute）祖先元素，递归上溯，如果没有祖先元素是定位的话，会返回null
// getBoundingClientRect用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
// http://www.ruanyifeng.com/blog/2009/09/find_element_s_position_using_javascript.html
function getPosition(element) {
    var pos = {};
    pos.x = element.getBoundingClientRect().left + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
    pos.y = element.getBoundingClientRect().top + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    return pos;
}



// 实现一个简单的Query，不用document.querySelector()
 function myQuery(selector, root) {
    var signal = selector[0];//selector.charAt(0)
    var allChildren = null;
    var content =  selector.substr(1);//去除# .
    var currAttr = null;
    var result = []; 
    root = root || document;
    switch (signal) {
        case "#"://id选择器
            result=root.getElementById(content);
            break;
        case ".":
            result=root.getElementsByClassName(content)[0];
            break;
        case "[":
            //属性无值
            if (content.index("=") == -1) {
                allChildren = root.getElementsByTagName("*");
                for (var i = 0, len = allChildren.length; i < len; i++) {
                    if (allChildren[i].getAttribute(selector.slice(1,-1)) !== null) {
                        result.push(allChildren[i]);
                    }
                }
            } else {
                // 属性有值
                var index = selector.indexOf("=");
                allChildren = root.getElementsByTagName("*");
                for (var i = 0, len = allChildren.length; i < len; i++) {
                    if (allChildren[i].getAttribute(selector.slice(1,index)) === selector.slice(index + 1, -1)) {
                        result.push(allChildren[i]);
                    }
                }
            }
            break;
        default://tag
        result = root.getElementsByTagName(selector)[0];
        break;
    }
    return result;
}
function $(selector) {
    if (!selector) {
        return null;
    }
    if (selector == document) {
        return document;
    }
    // 去除首尾空格
    selector = trim(selector);

    if (selector.indexOf(" ") !== -1) {
        // 如果存在空格，多重筛选
        var selectorArr = selector.split(/\s+/);
        var rootScope = myQuery(selectorArr[0]);//第一次查找
        
        return myQuery(selectorArr[1], rootScope);
        
    } else {
        // 一次筛选,直接查询
       return myQuery(selector,document);
    }

}


// 事件
// 给element绑定一个针对event事件的响应
function addEvent(element, event, listener) {
	if (element.addEventListener) { //主流浏览器，除IE 8 及更早 IE 版本
		element.addEventListener(event, listener, false);
	} else if (element.attachEvent) {  // IE 8 及更早 IE 版本
        element.attachEvent("on" + event, listener);
	} 
}

// 移除element对象的对于event事件发生时执行的listener的响应
function removeEvent(element, event, listener) {
	if (element.removeEventlistener) {
		element.removeEventlistener(event, listener, false);
	} else if (element.detachEvent) {
		element.detachEvent("on" + event, listener);
	} 
}

//实现click事件的绑定
function addClickEvent(element, listener) {
	addEvent(element, "click", listener);
}


// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
	addEvent(element, "keydown",function(event) {
		if (event.keyCode == 13) {
			listener();
		}
	});
}

//事件代理
function delegateEvent(element, tag, eventName, listener) {
	addEvent(element, eventName, function (event) {
		var target = event.target || event.srcElement;
		if (target.tagName.toLowerCase() === tag.toLowerCase()) {
			listener.call(target, event);
		}
	});
}

$.on = function (element, event, listener) {
	addEvent($(element), event, listener);
};
$.un = function (element, event, listener) {
	removeEvent($(element), event, listener);
};
$.click = function (element, listener) {
	addClickEvent($(element), listener);
};
$.enter = function (element, listener) {
	addEnterEvent($(element),listener);
};


$.delegate = function (element , tag, eventName, listener) {
	delegateEvent($(element), tag, eventName, listener);
};


//BOM
// 判断是否为IE浏览器，返回-1或版本号
function isIE() {
	var UserAgent = navigator.userAgent;
	var isAgent = UserAgent.match(/msie (\d+.\d+)/i);
	if (isAgent) {
		return isAgent[1];
	} else {
		//ie 11
		if (UserAgent.match(/Trident\/7.0;/i)) {
			isAgent = UserAgent.match(/rv:(\d+.\d+)/i);
			return isAgent[1];
		}
		return -1;
	}
}

//设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
	var date = new Date();
	date.setTime(date.getTime()+(expiredays*24*60*60*1000));
    var expires = "; expires="+date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + expires + "; path=/";
}

function getCookie(cookieName) {
	var name = cookieName + "=";
	var ca = document.cookie.split(";");
	for (var i=0, len = ca.length; i < len; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) {
        	return c.substring(name.length, c.length);
        }  
	}
	return "";
}


function ajax(url, options) {
	创建ajax对象
	var xmlhttp;
	if (window.XMLHttpRequest) {
		//IE 6 以上
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	
	var param = "";//请求参数
	var data = option.data ? options.data : -1;

	if (typeof (data) === "object") {
		for (var key in data) {
			if (data.hasOwnProperty(key)) {
				param += key + "=" + data[key] + "&";
			}
		}
		param.replace(/&$/, "");
	} else {
		param = "timestamp=" + new Date().getTime();
	}

	// 发送请求
	var type = options.type ? options.type.toUpperCase() : "GET";
	if (type === "GET") {
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	} else {
		xmlhttp.open("POST", url, true);
		xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.send(param);		
	}

	// onreadystatechange事件
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState === 4 && xmlhttp.status === 200){
			options.onsuccess(xmlhttp.responseText, xmlhttp.responseXML);
		} else {
			if (options.onfail) {
				options.onfail();
			}
		}
	};
}