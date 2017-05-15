var movedivs = document.getElementsByClassName('move');
var droptargets = document.getElementsByClassName('droptarget');

//-----------------------移动目标添加事件------------------------------

for (var i = 0; i < movedivs.length;i++) {
	// 设置元素可拖放
	movedivs[i].draggable = "true";
    
    // 开始拖拽时触发
	// movedivs[i].ondragstart = function (){
	// 	dragstart(event);
	// };
	
	// // 结束拖拽时触发
	// movedivs[i].ondragend = function () {
	// 	dragend(event);
	// };
}
$.delegate(".drag-block", "span","dragstart",dragstart);
$.delegate(".drag-block", "span","dragend",dragend);


//下面的也用事件代理会有bug，未解决
// -------------------------------放置区添加事件----------------------

for (var j = 0; j < droptargets.length; j++) {

	droptargets[j].ondragover = function() {
		// 默认地，无法将数据/元素放置到其他元素中
		allowDrop(event);
	};

    // 在拖拽过程中，释放鼠标时触发
	droptargets[j].ondrop = function() {
		drop(event);
	};

}



// ------------------调用到的函数--------------------
function dragstart(ev) {
	ev.target.style.opacity = "0.5";
	// 传递的信息	
	ev.dataTransfer.setData("text/html", event.target.id);

}

function dragend(ev) {
	ev.target.style.opacity = "1";
}


function allowDrop(ev) {
	ev.preventDefault();//阻止默认行为
}


function drop(ev) {
	// drop 事件的默认行为是以链接形式打开
	ev.preventDefault();//阻止默认行为
	
    // 接受信息
	var data = ev.dataTransfer.getData("Text/html");
    
    //这里不判断的话会出现的问题：
    // 1：block只能移到最后，不能移到顶部或中间
    // 2：block可以移动到另一个block中间
    // 移动到接受框的最后
	if (ev.target.className == "droptarget") {	
		ev.target.appendChild(document.getElementById(data));
	} 

	// 移动到相邻元素，实现上下可拖拽
	if (ev.target.className == "move") {
        console.log(ev.target);
		ev.target.parentNode.insertBefore(document.getElementById(data), ev.target);
	}

}

