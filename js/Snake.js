function Snake(img) {
    // 存储坐标，蛇的初始坐标
    this.arr = [
        { x: 6, y: 4 },
        { x: 5, y: 4 },
        { x: 4, y: 4 }
    ];
    // 存储图片，蛇的头部，身体，尾部图片
    this.img = img;
    // this.headImage = img.head;
    // this.bodyImage = img.body;
    // this.tailImage = img.tail;
    // 方向  键值左37 上38 右39 下40
    // 根据方向确定头部图片(direction - 37)就是数组中图片的序号
    this.direction = 39;    // 默认方向是39向右
    this.headImage = this.img.head[this.direction - 37];    // 取头朝向右的那一张图片
    this.bodyImage = this.img.body;     // 身体不分方向，只有一张
    this.tailImage = this.img.tail[this.direction - 37];    // 取尾部向左的那一张图片
    // 是否可以改变方向
    this.lock = false;
}

// 让蛇移动
Snake.prototype.move = function() {
    // 创建一个新的头部对象，初始值为初始的头部坐标
    var item = { x: this.arr[0].x, y:this.arr[0].y };
    // 判断方向
    switch (this.direction) {
        // 向左
        case 37:
            item.x -= 1;
            break;
        // 向上
        case 38:
            item.y -= 1;
            break;
        // 向右
        case 39:
            item.x += 1;
            break;
        // 向下
        case 40:
            item.y +=1;
            break;
        default:
            break;
    }
    // 添加头部
    this.arr.unshift(item);
    // 删除尾部
    this.arr.pop();

    // 确定尾部图片的方向，尾部的方向和倒数第二个的方向相同
    // 倒数第二个成员
    var second = this.arr[this.arr.length - 2];
    // 尾部是倒数最后一个成员
    var tail = this.arr[this.arr.length - 1];
    // 如果x相同，说明是垂直移动的
    if (tail.x === second.x) {
        // 在垂直方向上比较y值
        if (second.y > tail.y) {
            // 往下移动
            this.tailImage = this.img.tail[3];
        } else {
            // 向上移动
            this.tailImage = this.img.tail[1];
        }
    } else {
        // x不等，说明在水平方向上
        if (second.x > tail.x) {
            // 向右移动
            this.tailImage = this.img.tail[2];
        } else {
            this.tailImage = this.img.tail[0];
        }
    }
    // 蛇移动之后可以解锁
    this.lock = false;
}

// 改变方向
Snake.prototype.change = function(code) {
    // 如果锁住了，不能改变
    if (this.lock) {
        return;
    }
    // 锁住
    this.lock = true;
    // 左右移动，只能往上下改变方向，上下移动，只能左右改变方向
    // 获取方向键值之差
    var num = Math.abs(code - this.direction);
    if (num === 0 || num === 2) {
        return;
    }
    this.direction = code;
    // 更换头部图片的方向
    this.headImage = this.img.head[this.direction - 37];
}

// 蛇变长
Snake.prototype.growUp = function() {
    var tail = this.arr[this.arr.length - 1];
    // 尾部添加
    this.arr.push(tail);
}