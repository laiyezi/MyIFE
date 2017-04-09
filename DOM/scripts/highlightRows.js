// css实现tr:hover{
// 	font-weight:bold;
// }
//鼠标悬停在某个表格上方时，该行文本加黑加粗
function highlightRows(){
	if (!document.getElementsByTagName) return false;
	var rows = document.getElementsByTagName("tr");
	for (var i=0; i<rows.length; i++){
		rows[i].onmouseover = function(){
			this.style.fontWeight = "bold";
		}
		rows[i].onmouseout = function(){
			this.style.fontWeight = "normal";
		}
	}
}

addLoadEvent(highlightRows);