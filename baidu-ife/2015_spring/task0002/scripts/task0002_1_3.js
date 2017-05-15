// 第二阶段
// 给button添加click事件
//自动的不怎道怎么弄唉，要用ajax还是？
var myfunction = function() {
    var txt = $("textarea").value;//得到输入内容
    // console.log(txt.length);
    var txtarr = txt.split(/\n|\s+|,|，|、|;|；/);//分割成数组
    
    var trimtxt = [];
    // console.log(txtarr);
    for (var i=0; i<txtarr.length;i++){
        trimtxt[i] = trim(txtarr[i]);//每个内容去除左右空格，多个空格的空元素变为单空格元素
    }

    // console.log(trimtxt);
    var uniqtxt = uniqArray(trimtxt);//数组去重
    var len = uniqtxt.length;
    // console.log(uniqtxt);
   if (len>10 || uniqtxt == '') {
        $(".warn").style.display = "block";
        $(".show").innerHTML = ''; 
    } else {
       for (var j=0; j<uniqtxt.length; j++) {
            if (uniqtxt[j] !== ""){//去除空数组
          
                $(".warn").style.display = 'none';
                $(".show").innerHTML+= '<label><input type="checkbox"/>' + uniqtxt[j] +'</label><br>';  
            }
        }
    }        
}
//onchnage事件也不能完全实现
// $.on("textarea","change",myfunction);
$.click("button", myfunction);
