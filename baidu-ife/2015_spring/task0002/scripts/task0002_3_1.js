var imgListDiv = $(".imgList");
var timerInner = null;
var timer = null;
var activeID = 1;
var nextID = 0;

// 1. clientHeight和clientWidth用于描述元素内尺寸，是指 元素内容+内边距 大小，不包括边框（IE下实际包括）、外边距、滚动条部分
// 2. offsetHeight和offsetWidth用于描述元素外尺寸，是指 元素内容+内边距+边框，不包括外边距和滚动条部分
var imageWidth = $("img").offsetWidth;
var circleArr = $(".circle").getElementsByTagName('a');
console.log(imageWidth);
var intervalTime = 3000;

// 为每个圆点添加index属性
for (var i = 0; i< circleArr.length; i++){
	circleArr[i].index = i + 1;
}

// 移动图像位置，
function starMove(target) {

	imgListDiv.style.left = parseInt(imgListDiv.style.left) + target + "px";

}

//轮播
function rotate(clickID) {
	if (clickID) {
		nextID = clickID;
	} else {
		nextID = activeID < 4 ? activeID + 1 : 1;
	}
    // 圆点
	removeClass(circleArr[activeID - 1], "active");
	addClass(circleArr[nextID - 1], "active");

	starMove((activeID - nextID ) * imageWidth);
	activeID = nextID;
}

timer = setInterval(rotate, intervalTime);

// 圆点点击
$.delegate(".circle", "a", "click", function() {
	clearInterval(timer);
	var clickID = this.index;
	rotate(clickID);
	timer = setInterval(rotate, intervalTime);
})