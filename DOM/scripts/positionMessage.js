//定位元素
function positionMessage(){
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
    //延迟执行moveMessage函数
    // movement = setTimeout("moveMessage()",5000);
    moveElement("message",200,200,10);
}

addLoadEvent(positionMessage);