
$("button").onclick = function() {
	check();
}




function $(id) {
	return document.querySelector(id);
}

// 正则实现去除左右空格
function trim(str) {
	var result = "";
	result = str.replace(/^\s+|\s+$/g,"");
	return result;
}



function check() {
    var input = $("#name")
	var val = trim(input.value);
	var len = valLength(val);
	console.log(len);
	var show = $(".show");

    if (val === '') {

    	show.innerHTML = "名字不能为空";
        show.style.color = "red";
        input.style.borderColor = "red";

    } else if(len < 4 || len > 16){

    	show.innerHTML = "字符串长度为4~16！";
    	show.style.color = "red";
   	    input.style.borderColor = "red";
   	    input.value = '';

    } else {

    	show.innerHTML = "格式正确！";
	   	show.style.color = "green";
    	input.style.borderColor = "green";  

    }
 
}

//每个英文字母、数字、英文符号长度为1
// 每个汉字，中文符号长度为2
// 0~31及127是控制字符或通信专用符，32~126是字符
// 48~57是0到9，65~90是大写英文字母，97~122是小写英文字母
function valLength(val) {
	var count = 0;
	for (var i = 0; i < val.length; i++) {
		var num = val[i].charCodeAt();
		if (num >= 0 && num <= 128) {
			count++;
		} else {
			count += 2;
		}
	}

	return count;
}