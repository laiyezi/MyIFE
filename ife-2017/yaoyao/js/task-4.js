/*1.画表格和移动块
* 2.实现左转，右转，转头
* 3.实现移动
* 注意：想用element.style.att 获取属性，该属性必须用行内样式实现
*/ 
$("#turn-left").onclick = function() {
	    var target = $("#target");
	    turn(target, -90);
}
$("#turn-right").onclick = function() {
	    var target = $("#target");
	    turn(target, 90);
}
$("#turn-back").onclick = function() {
	    var target = $("#target");
	    turn(target, 180);
}
$("#go").onclick = function() {
	var target = $("#target");
	go(target);
}



function $(id) {
	return document.querySelector(id);
}

function turn(element, angle) {
    var oldAngle = parseInt(element.style.transform.slice(7));
    var newAngle = oldAngle + angle;

    target.style.transform = "rotate(" + newAngle + "deg)";
}

function go(element) {
	var angleCurrent = parseInt(element.style.transform.slice(7));
    var angle = angleCurrent % 360;
    angle = angle >= 0 ? angle : (angle + 360);//处理以后，只有四个值 0(头朝上),90(头朝右),180(头朝下),270(头朝左)
    // console.log(angle);
    

    var top = parseInt(element.style.top);
    var left = parseInt(element.style.left);
    // console.log(top);
    // console.log(left);

    switch(angle) {
    	case 0://头朝上
			if (top >= 50) {
	    		element.style.top = (top - 50) + "px";
	    	} else {
	    		alert("小明你到达世界边界了");
	    	}
	    	break;
	    case 90://头朝右
			if (left <= 400) {
	    		element.style.left = (left + 50) + "px";
	    	} else {
	    		alert("小明你到达世界边界了");
	    	}
		    break;
		case 180://头朝下
			if (top <= 400) {
	    		element.style.top = (top + 50) + "px";
	    	} else {
	    		alert("小明你到达世界边界了");
	    	}

			break;
	    case 270://头朝左
			if (left >= 50) {
	    		element.style.left = (left - 50) + "px";
	    	} else {
	    		alert("小明你到达世界边界了");
	    	}
		    break;
    }

}
