/**
 * @Author: Li'Zhuo
 * @Date:   2016-07-19 21:20:52
 * @Email:  topgrd@outlook.com
 * @Project: ES6
 * @Last modified by:   Li'Zhuo
 * @Last modified time: 2016-07-19 21:52:29
 */

/**
 * es6可以直接给变量设置默认值 只能省略最后一个参数
 * @param  {[type]} x [description]
 * @param  {[type]} y = 10 [默认为10]
 * @return {[type]}   [结果]
 */

function totalCount(x, y = 10) {
    return x + y;
}

totalCount(12); // return 33
totalCount(10, 20); // return 30

/**
 * 变量设置默认值和解构赋值一起使用
 * @param  {[type]} {x    [description]
 * @param  {[type]} y=10} [description]
 * @return {[type]}       [description]
 */
function say({x, y=10}) {
    console.log(x,y);
}

say({}); // undefined, 10
say({x: 13}); // 13, 10
say(); // error 参数必须为对象

function fetch(url, { method="GET", data = {}, headers = {}}) {
    console.log(method);
}

fetch("http://www.baidu.com", {}); // 'GET'
fetch("http://www.dd.com"); //error 第二个参数不能不能为空，因为读取不到第二参数的method, data, headers属性;

// 可以这样 给第二个参数赋默认值 如果没写第二个参数 默认有值
function fetch2(url, { method="GET", data = {}, headers = {}} = {}) {
    console.log(method);
}

fetch2("wwww.dada.com"); // 'GET'

// 函数的length属性返回的是没有赋默认值参数的个数
(function (a) {}).length // 1
(function (a = 5) {}).length // 0
(function (a, b, c = 5) {}).length // 2

// ...args 之后不能有别的参数，会引起错误
function add(...args) {
    let sum = 0;
    for (let x of args) {
        sum += x;
    }

    return sum;
}

add(1,23,4); // 28
add(33,2,4,3); // 42

console.log(...[1, 3, 4]); // [1, 3, 4];
