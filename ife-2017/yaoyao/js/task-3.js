
var dataSchool = {
	北京 : ["北京大学", "清华大学", "中国人民大学"],
    上海 : ["复旦大学", "上海交通大学", "同济大学"],
    广州 : ["中山大学", "华南理工"]
}

// ----------------点击在校生，出现学校选择，隐藏工作单位选择-------
$("#in").onclick = function() {
	$(".inschool").style.display = "block";
	$(".outschool").style.display = "none";
}
// -------------点击非在校生，出现工作单位选择，隐藏学校------------
$("#out").onclick = function() {
	$(".inschool").style.display = "none";
	$(".outschool").style.display = "block";	
}
// -------------选择城市，改变相应的学校选择------
$("#city").onchange = function() {
  
	init($("#school"));//每次先初始化，清空学校
	addOption($("#school"), $("#city").value);//然后根据选择的城市，动态创建学校选项
}


function $(id) {
	return document.querySelector(id);
}

function init(element) {
    element.innerHTML = '';
}

function addOption(element, value){
	var len = dataSchool[value].length;
	
	for (var i = 0; i < len; i++) {
		var newOption = document.createElement("option");
		newOption.setAttribute("value", dataSchool[value][i]);
		newOption.innerHTML = dataSchool[value][i];

		element.append(newOption);
	}

}







