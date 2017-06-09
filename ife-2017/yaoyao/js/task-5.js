/*1.画表格和移动块
* 2.实现左转，右转，转头
* 3.实现移动
* 4.新增两类指令，tra,mov,相同点：相应方向移一格，不同点：tra:方向不变；mov:方向跟着改变
* 注意：想用element.style.att 获取属性，该属性必须用行内样式实现
*/ 

console.log($("#tra-lef"));
window.onload = function() {
	$("#turn-left").onclick = function() {  
	    turn(-90);
	}
	$("#turn-right").onclick = function() {
		turn(90);
	}
	$("#turn-back").onclick = function() {
		turn(180);
	}
	$("#go").onclick = function() {
		go();
	}


	$("#tra-lef").onclick = function() {  
	    move("lef");
	}
	$("#tra-top").onclick = function() {  
	    move("top");
	}
	$("#tra-rig").onclick = function() {  
	    move("rig");
	}
	$("#tra-bot").onclick = function() {  
	    move("bot");
	}

	$("#mov-lef").onclick = function() {
	
		directionTurn("lef");
		move("lef");
	}
	$("#mov-top").onclick = function() {
	
		directionTurn("top");
		move("top");
	}
	$("#mov-rig").onclick = function() {
	
		directionTurn("rig");
		move("rig");
	}
	$("#mov-bot").onclick = function() {
		
		directionTurn("bot");
		move("bot");
	}
}



function $(id) {
	return document.querySelector(id);
}

//
function turn(angle) {
	var element = $("#target");
    var oldAngle = parseInt(element.style.transform.slice(7));
    var newAngle = oldAngle + angle;

    element.style.transform = "rotate(" + newAngle + "deg)";
}

function directionTurn(direction) {
	var element = $("#target");
	var arr ={top:0,rig:90,bot:180,lef:270};
	element.style.transform = "rotate(" + arr[direction] + "deg)";

}


function go() {
	var element = $("#target");
	var angleCurrent = parseInt(element.style.transform.slice(7));
    var angle = angleCurrent % 360;
    angle = angle >= 0 ? angle : (angle + 360);//处理以后，只有四个值 0(头朝上),90(头朝右),180(头朝下),270(头朝左)
    var arr = {0:"top",90:"rig",180:"bot",270:"lef"};
    move(arr[angle]);

}

function move(direction) {
	var element = $("#target");
    var top = parseInt(element.style.top);
    var left = parseInt(element.style.left);
        switch(direction) {
    	case 'top'://
			if (top >= 50) {
	    		element.style.top = (top - 50) + "px";
	    	} else {
	    		alert("小明你到达世界边界了");
	    	}
	    	break;
	    case 'rig'://
			if (left <= 400) {
	    		element.style.left = (left + 50) + "px";
	    	} else {
	    		alert("小明你到达世界边界了");
	    	}
		    break;
		case 'bot'://
			if (top <= 400) {
	    		element.style.top = (top + 50) + "px";
	    	} else {
	    		alert("小明你到达世界边界了");
	    	}

			break;
	    case 'lef'://
			if (left >= 50) {
	    		element.style.left = (left - 50) + "px";
	    	} else {
	    		alert("小明你到达世界边界了");
	    	}
		    break;
    }
}
