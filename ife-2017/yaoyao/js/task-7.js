// 数据
var datas = {
	head:[
	{
		value:'name',
		name:'姓名',
		sortable:false
	}, {
		value:'chinese',
		name:'语文',
		sortable:true
	}, {
		value:'math',
		name:'数学',
		sortable:true
	}, {
		value:'english',
		name:'英语',
		sortable:true
	}, {
		value:'total',
		name:'总分',
		sortable:true
	}
	],

	body:[
    {
    	name: '鸣人',
    	chinese: 10,
    	math: 20,
    	english: 30,
    	total: 60
    },
    {
    	name: '佐助',
    	chinese: 90,
    	math: 99,
    	english: 90,
    	total: 270
    },
    {
    	name: '小樱',
    	chinese: 90,
    	math: 80,
    	english: 100,
    	total: 270
    }
    ]
};


var tabCon = document.getElementById('tab');
var tabHead = datas.head;
var tabBody = datas.body;

var tabHeadLen = tabHead.length;
var tabBodyLen = tabBody.length;


function init() {
	addThead();
	addTbody();
}


// 创建表头
function addThead() {
	var tHead = document.createElement('thead');
	var trNode = addTr();
    
    // forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数
	tabHead.forEach(function(head) {

		// 创建表头td
		var tds = addTd(head.name);
        
        // 需要排序的td 添加span标签实现排序功能
		if(head.sortable) { //姓名的sortable设置为true可以按名字排序
			var val = head.value;
            
            // 升序
			var upBtn = document.createElement('span');
			upBtn.className = 'upBtn';
			tds.appendChild(upBtn);

			upBtn.onclick = function() {
				
				upSort(val);
			};

            // 降序
			var downBtn = document.createElement('span');
			downBtn.className = 'downBtn';
			tds.appendChild(downBtn);

			downBtn.onclick = function() {		
				downSort(val);
			};
		}
        // 将表头td添加进表头tr
		trNode.appendChild(tds);
	});
    
    // 给表头添加内容
	tHead.appendChild(trNode);
	// 将表头添加进表格主体
	tabCon.appendChild(tHead);
}

// 创建表格内容
function addTbody() {

	var tBody = document.createElement('tbody');

	// 遍历数据内容
	for (var i = 0; i < tabBodyLen; i++) {
		// 创建数据内容行tr
		var trNode = addTr();

		// for/in 遍历对象属性，创建每行内容td
		for (var key in tabBody[i]) {
			var tds = addTd(tabBody[i][key]);
			trNode.appendChild(tds);
		}
        
        // 把每行内容添加到tbody
		tBody.appendChild(trNode);
	}
    
    // 把表格tbody添加到表格主体
	tabCon.appendChild(tBody);
}

// 创建行 tr
function addTr() {
	var trNode = document.createElement('tr');
	return trNode;
}

// 创建内容为value的td表格内容
function addTd(value) {
	var tdNode = document.createElement('td');
	tdNode.innerText = value;
	return tdNode;
}

// 小到大排序
function upSort(val) {
	tabBody.sort(function(a,b){
		return a[val] - b[val];
	});
	tabCon.innerHTML = '';
	init();
}
// 大到小排序
function downSort(val) {
	tabBody.sort(function(a,b) {
		return b[val] - a[val];
	});
	tabCon.innerHTML = '';
	init();
}

init();

