//移动元素位置
function moveElement(elementID,final_x,final_y,interval) {
	//判断方法是否存在
	if (!document.getElementById) return false;
	if (!document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	
	//检查元素是否已经存在movement属性，已存在则清除，防止快速移动鼠标造成的问题，保证只有一条setTimeout函数调用语句
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
    //检查属否存在left,top属性，不存在则默认为0px
    //这段是否必要存疑，prepareSlideshow.js中已设置position,left,top为0px
    //即便调用函数没设置，那是否也要检查position是否存在且设置默认，书中把position从prepareSlideshow.js转移到css中。
    //是必要的，调用函数没添加此属性，此处三个皆要检查。

    if (!elem.style.position){
    	elem.style.position = "absolute";
    }
    if (!elem.style.left){
    	elem.style.left = "0px";
    }
    if (!elem.style.top){
    	elem.style.top = "0px";
    }
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	var dist = 0;
	if (xpos == final_x && ypos == final_y){
		return true;
	}

	if (xpos < final_x){
		//++每次移动一个像素，dist每次按差距比例移动
		// xpos++;
		dist = Math.ceil((final_x-xpos)/10);
		xpos = xpos + dist;
	}
	if (xpos > final_x){
		// xpos--;
		dist = Math.ceil((xpos-final_x)/10);
		xpos = xpos - dist;
	}
	if (ypos < final_y){
		// ypos++;
		dist = Math.ceil((final_y-ypos)/10);
		ypos = ypos + dist;
	}
	if (ypos > final_y){
		// ypos--;
		dist = Math.ceil((ypos - final_y)/10);
		ypos = ypos - dist;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	// var repeat = " moveElement(' " + elementID + " ', " + final_x + " , " + final_y + " , " + interval + " ) ";
	//刚开始看的有点懵，什么乱七八糟的，注意看上面，其实这是一个字符串、变量混合拼接
	var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";
    //movement是全局变量或局部变量存在问题，全局变量，鼠标过快移动，出现问题，局部变量无法使用clearTimeout,
    // 为元素添加属性movement
	elem.movement = setTimeout(repeat,interval);
}


