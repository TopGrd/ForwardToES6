/**
 * @Author: Li'Zhuo
 * @Date:   2016-07-19 22:01:24
 * @Email:  topgrd@outlook.com
 * @Project: ES6
 * @Last modified by:   Li'Zhuo
 * @Last modified time: 2016-07-28 21:27:22
 */

// 允许写入变量
var foo = 'hack';
var bar = {foo};
console.log(bar); // {foo: 'hack'} 属性值等于属性名所代表的变量

let f = (x, y) => ({x, y});

f(11, 'hello'); // {x: 11, y: 'hello'}

// 对象里的方法简写
let o = {
    method(x) {
        console.log(x);
    }
};

o.method(11); // 11

// Object的合并

var o1 = {x: 10};
var o2 = {y: 20};
/**
 * 合并 warning: 浅拷贝
 * @param  {Object} o1 target
 * @param  {Object} o1
 * @param  {Object} o2
 * @return {Object}    [result]
 */
Object.assign(o1, o1, o2);
console.log(o1); // Object {x: 10, y: 20}
