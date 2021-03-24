/**
 * 地图类
 * @row     行数
 * @col     列数
 * @width   总宽
 * @height  总高
 * ***/
function Map(row, col, width, height) {
    this.row = row;
    this.col = col;
    this.width = width;
    this.height = height;
    // 二维数组
    this.arr = [];
    // 定义容器元素
    this.dom = document.createElement('div');
}
// 初始化
Map.prototype.init = function() {
    // 遍历行列
    for (var i = 0; i < this.row; i++) {
        // 创建行元素
        var rowDom = document.createElement('div');
        // 设置类
        rowDom.className = 'row';
        rowDom.style.height = this.height / this.col + 'px';
        // 定义行数组
        var rowArr = [];
        // 遍历该行的每一列
        for (var j = 0; j < this.col; j++) {
            // 创建每一个列元素
            var colDom = document.createElement('div');
            colDom.className = 'col';
            // 将单元格放入行元素中
            rowDom.appendChild(colDom);
            // 在数组中，存储对单元格的映射
            rowArr.push(colDom);
        }
        // 将行元素渲染并存储
        this.dom.appendChild(rowDom);
        // 存储行数组
        this.arr.push(rowArr);
    }
    // 设置容器元素类
    this.dom.className = 'box';
    this.dom.style.width = this.width + 'px';
    this.dom.style.height = this.height + 'px';
    // 上树
    document.body.appendChild(this.dom);
}

// 清空地图
Map.prototype.clear = function() {
    for (var i = this.arr.length - 1; i >= 0; i--) {
        for (var j = this.arr[i].length - 1; j >=0; j--) {
            this.arr[i][j].style.backgroundImage = '';
        }
    }
}