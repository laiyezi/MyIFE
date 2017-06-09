function $(id) {
	return document.querySelector(id);
}

$("#btn").onclick = function() {
	$(".mask").style.display = "block";
	$("#toolTip").style.display = "block";
}

$("span").onclick = function() {
	$(".mask").style.display = "none";
	$("#toolTip").style.display = "none";
}

$(".mask").onclick = function() {
	$(".mask").style.display = "none";
	$("#toolTip").style.display = "none";
}

$("#toolTip").onmousedown = function(ev) {
	var e = ev || window.ev;
	// 鼠标相对于浏览器的坐标
	mousex = e.clientX,
	mousey = e.clientY,
    // $("#toolTip").offsetLeft，当前元素左上角相对于已定位父元素的距离
	fx = mousex - $("#toolTip").offsetLeft,
	fy = mousey - $("#toolTip").offsetTop;
	document.onmousemove = function(ev) {
		var l = ev.clientX - fx,
		t = ev.clientY-fy;
		$("#toolTip").style.left = l + 'px';
		$("#toolTip").style.top = t + 'px';

	};
	$("#toolTip").onmouseup = function() {
		document.onmousemove = null;
		$("#toolTip").onmouseup = null;
	}
}