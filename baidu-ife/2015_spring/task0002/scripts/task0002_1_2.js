// 第二阶段
// 给button添加click事件
$.click("button", function() {
    var txt = $("textarea").value;//得到输入内容
    // console.log(txt);
    var txtarr = txt.split(/\n|\s+|,|，|、|;|；/);//分割成数组
    console.log(txtarr);
    var trimtxt = [];
    for (var i=0; i<txtarr.length;i++){
        trimtxt[i] = trim(txtarr[i]);//每个内容去除左右空格，多个空格的空元素变为单空格元素
    }

    console.log(trimtxt);
    var uniqtxt = uniqArray(trimtxt);//数组去重
    console.log(uniqtxt);
   for (var j=0; j<uniqtxt.length; j++) {
        if (uniqtxt[j] !== ""){//去除空数组
            $("#show").innerHTML+="<li>"+uniqtxt[j]+"</li>";
        }
   }
});