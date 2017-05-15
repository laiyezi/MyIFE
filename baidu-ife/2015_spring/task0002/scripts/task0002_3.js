window.onload = function (){
	var container = $(".container");
	var list = $(".imglist");
	var btn = $(".btn").getElementsByTagName("span");
	var next = $("#next");
	var prev = $("#prev");
	// alert(next.innerHTML);
	var index = 1;
	var animated = false;

    //圆点颜色变换
	function showBtn() {
		for (var i = 0; i < btn.length; i++) {
			if (btn[i].className == "on") {
				btn[i].className = '';
				break;
			}

		}
		btn[index - 1].className = "on";

	}
	
    //图片位置移动
	function animate(offset) {
		var newLeft = parseInt(list.style.left) + offset;
		var time = 500;
		var interval = 10;
		var speed = offset/(time/interval);
        animated = true
        //设定图片移动速度
		function go() {
			if (parseInt(list.style.left) !== newLeft) {
				list.style.left = parseInt(list.style.left) + speed + "px";
				setTimeout(go, interval);
			} else {
				list.style.left = newLeft + "px";
                // 第一张图片向左移动时，展示最后一张图片
				if (newLeft > -500) {
					list.style.left = -2000 + "px";
				}
                // 最后一张图片向右移动时，展示第一张图片
				if (newLeft < -2000) {
					list.style.left = -500 + "px";
				}
				animated = false;
			}
		}
		go();
		

	}
    
    // 右侧点击移动
	next.onclick = function(){
		// 图片移动时不进行下一步操作
		if (!animated) {
			if (index == 4) {
				index = 1;
			} else {
				index += 1;
			}
			showBtn();
			animate(-500);
		}	
	};
	//左侧点击移动
	prev.onclick = function(){
		if (!animated) {
			if (index == 1) {
				index = 4;
			} else {
				index -= 1;
			}
			showBtn();
			animate(500);
		}			
	};
    
    // 自动播放
	function play() {
		timer = setInterval(function(){
			next.onclick();
		},3000);
	}
    // 播放停止
    function stop() {
    	clearInterval(timer);
    }

    // 每个圆点点击图片移动
	for (var i=0;i<btn.length;i++) {
		btn[i].onclick = function () {
			// 图片移动时不进行下一步操作
			if (animated) {
				return;
			}
			// 点击圆点是当前图片时不进行下一步操作
			if (this.className === "on") {
				return;
			}
			var myIndex = parseInt(this.getAttribute("index"));
			var offset = - 500 * (myIndex - index);
			animate(offset);
			index = myIndex;
			showBtn();
		}
	}
	// 鼠标悬停播放停止，离开自动播放
    container.onmouseover = stop;
    container.onmouseout = play;
	play();
}