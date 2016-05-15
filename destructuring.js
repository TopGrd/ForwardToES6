/**
 * @Author: Li'Zhuo
 * @Date:   2016-05-15 19:59:32
 * @Email:  topgrd@outlook.com
 * @Project: ES6
 * @Last modified by:   Li'Zhuo
 * @Last modified time: 2016-05-15 21:19:25
 */

// 解构数组
let [a, b, c] = [1, 2, 3];
console.log(a, b, c);

let [x, y = 'b'] = [1];
console.log(x, y);

// 解构对象
let {
    name,
    age
} = {
    name: 'jack',
    age: 13
};

// 函数参数解构
function add([a, b]) {
    return a + b;
}

// 交换变量的值
[x, y] = [y, x];

function exp() {
    return [1, 2, 3]
}

let [m, n, v] = exp();

// 提取Json数据
let JsonData = {
    id: 12,
    name: 'tianya',
    price: 123.4,
    data: 'secert for game, v k'
};
let {
    id,
    name,
    price,
    data
} = JsonData;
