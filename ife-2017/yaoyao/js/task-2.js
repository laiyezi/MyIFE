var tag1,tag2,tag3,tag4,tag5;

$("#name").onfocus = function() {
    $("#name-show").innerHTML = "必填，长度为4~16个字符";
    $("#name-show").style.color = "#999";
    $("#name").borderColor = "#110";    
};
$("#name").onblur = function() {
    checkName();
};
$("#psw").onfocus = function() {
	$("#psw-show").innerHTML = "6~16个字符，区分大小写";
	$("#psw-show").style.color = "#999";
	$("#psw").borderColor = "#110";
};
$("#psw").onblur = function() {
	checkPsw();
};

$("#rpsw").onfocus = function() {
	$("#rpsw-show").innerHTML = "请再次输入密码";
	$("#rpsw-show").style.color = "#999";
	$("#rpsw-show").borderColor = "#110";
};
$("#rpsw").onblur = function() {
	checkRpsw();
};
$("#email").onfocus = function() {
	$("#email-show").innerHTML = "请输入邮箱";
	$("#email-show").style.color = "#999";
	$("#email-show").borderColor = "#110";
};
$("#email").onblur = function() {
	checkEmail();
};

$("#phone").onfocus = function() {
	$("#phone-show").innerHTML = "请输入手机号码";
	$("#phone-show").style.color = "#999";
	$("#phone-show").borderColor = "#110";
};
$("#phone").onblur = function() {
	checkPhone();
};

$("button").onclick = function() {
    checkAll();
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

function checkName() {
    var inputName = $("#name");
    var nameShow = $("#name-show");
	var val = trim(inputName.value);
	var len = valLength(val);

    if (val === '') {

    	nameShow.innerHTML = "名字不能为空";
        nameShow.style.color = "red";
        inputName.style.borderColor = "red";

    } else if (len < 4 || len > 16) {

    	nameShow.innerHTML = "字符串长度为4~16！";
    	nameShow.style.color = "red";
   	    inputName.style.borderColor = "red";

    } else {

    	nameShow.innerHTML = "格式正确！";
	   	nameShow.style.color = "green";
    	inputName.style.borderColor = "green"; 

    	tag1 = true; 

    }
 
}


function checkPsw() {
	var inputPsw = $("#psw");
	var pswShow = $("#psw-show");
	//空格也算密码
	var val = inputPsw.value;
	var len = valLength(val);
    if (len === 0) {
    	pswShow.innerHTML = "密码不能为空";
        pswShow.style.color = "red";
        inputPsw.style.borderColor = "red";
    } else if (len < 6 || len > 16) {
    	pswShow.innerHTML = "密码请设置为6~16位";
        pswShow.style.color = "red";
        inputPsw.style.borderColor = "red";
    } else {
    	pswShow.innerHTML = "符合要求";
        pswShow.style.color = "green";
        inputPsw.style.borderColor = "green";

        tag2 = true;
    }

}


function checkRpsw() {
	var inputRpsw = $("#rpsw");
	var rpswShow = $("#rpsw-show");
    
    var val1 = $("#psw").value;
	var val = inputRpsw.value;

	if (val1 === val && val !== '') {
		rpswShow.innerHTML = "密码一致";
		rpswShow.style.color = "green";
		inputRpsw.style.borderColor = "green";

		tag3 = true;
	} else {
		rpswShow.innerHTML = "请确认密码一致";
		rpswShow.style.color = "red";
		inputRpsw.style.borderColor = "red";		
	}


}

function checkEmail() {
	var inputEmail = $("#email");
	var emailShow = $("#email-show");

	var val = inputEmail.value;
	var reg = /\w+@\w+\.[a-zA-Z]+/g;
    if (val === '') {
		emailShow.innerHTML = "邮箱不能为空";
		emailShow.style.color = "red";
		inputEmail.style.borderColor = "red";
	} else if (reg.test(val)) {
		emailShow.innerHTML = "邮箱符合要求";
		emailShow.style.color = "green";
		inputEmail.style.borderColor = "green";

		tag4 = true;
	} else {
		emailShow.innerHTML = "邮箱不符合要求";
		emailShow.style.color = "red";
		inputEmail.style.borderColor = "red";
	}
}


function checkPhone() {
	var inputPhone = $("#phone");
	var phoneShow = $("#phone-show");

	var val = inputPhone.value;
	var reg = /^1\d{10}$/g;

	if (val === '') {
		phoneShow.innerHTML = "手机号码不能为空";
		phoneShow.style.color = "red";
		inputPhone.style.borderColor = "red";
	} else if (reg.test(val)) {
		phoneShow.innerHTML = "符合要求";
		phoneShow.style.color = "green";
		inputPhone.style.borderColor = "green";

		tag5 = true;
	} else {
		phoneShow.innerHTML = "手机号码不符合要求";
		phoneShow.style.color = "red";
		inputPhone.style.borderColor = "red";
	}
}


function checkAll() {
	if (tag1 && tag2 && tag3 && tag4 && tag5) {
		alert("确认成功");
	} else {
		alert("输入有误");
	}
}