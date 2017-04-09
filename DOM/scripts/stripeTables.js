//添加class属性
function addClass(element,value) {
	// 检查className 属性是否为null,是的话直接添加className为value，已存在则新添加value
	if (!element.className){
		element.className = value;
	} else {
		//在原有className基础上追加新值value
		newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
}


//CSS3之外，用js实现奇偶行数变色，其实是隔行换色
function stripeTables(){
	if (!document.getElementsByTagName) return false;
	var tables = document.getElementsByTagName("table");
	var odd, rows;
	for (var i=0; i<tables.length; i++){
		odd = false;
		rows = tables[i].getElementsByTagName("tr");
		for (var j=0; j<rows.length; j++){
			if (odd == true) {
				//1.直接设置行属性
				// rows[j].style.backgroundColor = "#ffc";
				//2.隔行添加class属性为odd,在CSS中设置.odd{background-color:#ffc}
				addClass(rows[j], "odd");
				odd = false;
			} else {
				odd = true;
			}
		}
	}
}



addLoadEvent(stripeTables);