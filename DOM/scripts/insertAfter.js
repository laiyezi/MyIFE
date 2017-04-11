//在目标元素后面添加新元素(shouwpic.js出现)
function insertAfter(newElement,targetElement){
    //得到父元素
    var parent = targetElement.parentNode;
    // 如果父元素的最后一个子元素是目标元素，就把新元素添加到父元素末尾
    if (parent.lastChild == targetElement){
        parent.appendChild(newElement);
    } else {
        // 否则添加到目标元素后面
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}