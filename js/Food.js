// x,y是食物的坐标
function Food(y, x, img) {
    this.x = x;
    this.y = y;
    this.img = img;
}

Food.prototype.reset = function(x, y) {
    // 更新坐标
    this.x = x;
    this.y = y;
}