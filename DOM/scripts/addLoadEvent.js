//添加onload事件
function addLoadEvent(func) {
    //把现有的window.onload事件处理函数的值存入变量oldonload
    var oldonload = window.onload;
    //如果还没有绑定任何函数，就把新函数添加给他
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        //如果已经绑定了函数，就把新函数追加到现有指令末尾
        window.onload = function() {
            oldonload();
            func();
        }
    }
}
