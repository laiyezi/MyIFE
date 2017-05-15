window.onload = function() {
	showTime();
}

//------------系统当前时间------------------------------ 
function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	} 
	return i;
}

function showTime() {
	var weekday = new Array(7);
	weekday[0] = "星期日";
	weekday[1] = "星期一";
	weekday[2] = "星期二";
	weekday[3] = "星期三";
	weekday[4] = "星期四";
	weekday[5] = "星期五";
	weekday[6] = "星期六";

	var nowDate = new Date();
	var year = nowDate.getFullYear();
	var month = nowDate.getMonth() + 1;
	var date = nowDate.getDate();
	var day = nowDate.getDay();
	var h = nowDate.getHours();
	var m = nowDate.getMinutes();
	var s = nowDate.getSeconds();
	m = checkTime(m);
	s = checkTime(s);

	document.getElementById('now').innerHTML = year+" 年 "+month+" 月 "+date+" 日 "+weekday[day] + h+" : "+ m +" : " +s;
	setTimeout(showTime, 1000);
	// setInterval(showTime, 1000);  
  	 
}


// -----------------------倒计时----------------------------------
$.click("button", function(){
	// <input type="date">可以直接选择时间，不用手动输入
	//判断时间格式,用户直接输入时间时，用正则进行判断
	// var pattern = /^\d{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2]\d)|(3[0-1]))$/; 
    


	var interval = setInterval(lefttime, 1000);

	function lefttime(){
		var nowtime = new Date();//当前时间
		var value = $("input").value+",00:00:00";//用户选择时间
		console.log(value);
		var endtime = new Date(value);
		var lefttime = endtime - nowtime;//距离截止 时间
		
		if (lefttime < 0){
            clearInterval(interval);
            $(".show").innerHTML = "<h4>你输入的时间早于当前时间</h4>";
		} else {
		    var d = Math.floor(lefttime/(1000*60*60*24));
		    var h = Math.floor(lefttime/(1000*60*60) % 24);
		    var m = Math.floor(lefttime/(1000*60) % 60);
		    var s = Math.floor(lefttime/1000 % 60);
		    $(".show").innerHTML = "<h4>距离截至日期"+value+"还有</h4><h4>"+d+" 天 "+h+" 小时 "+m+" 分钟 "+s+" 秒</h4>";
		    
		    if(lefttime === 0) {
		    	clearInterval(interval);
		    }
		}
		

    }
});