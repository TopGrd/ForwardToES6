/**
 * @Author: Li'Zhuo
 * @Date:   2016-05-15 22:01:03
 * @Email:  topgrd@outlook.com
 * @Project: ES6
 * @Last modified by:   Li'Zhuo
 * @Last modified time: 2016-05-17 23:05:44
 */

// method Array.from 将类数组转成新的数组
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
let arr = Array.from(arrayLike);

Array.from([1, 2, 3], (x) => x * x);

// Array.of 返回参数组成的数组
Array.of(3, 32, 1);

function arrayOf() {
    return [].slice.call(arguments);
}
// 返回第一个符合毁掉函数条件的数组成员
[1, -4, -5, 10].find((n) => n < 0) // -4

// fill
[1, 2, 3].fill(7); // [7, 7, 7]
['a', 'b', 'c'].fill(7, 1, 2);
// ['a', 7, 'c']

// for..of
for (let index of['a', 'b'].keys()) {
    console.log(index);
}
// 0
// 1

for (let elem of['a', 'b'].values()) {
    console.log(elem);
}
// 'a'
// 'b'

// includes()
[1, 3, 4, 5].includes(3);
// return ture
