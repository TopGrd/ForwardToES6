/**
 * @Author: Li'Zhuo
 * @Date:   2016-07-28 21:58:07
 * @Email:  topgrd@outlook.com
 * @Project: ES6
 * @Last modified by:   Li'Zhuo
 * @Last modified time: 2016-08-08 20:15:53
 */

/**
 * Set 成员不重复
 * add(value)：添加某个值，返回Set结构本身。
 * delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
 * has(value)：返回一个布尔值，表示该值是否为Set的成员。
 * clear()：清除所有成员，没有返回值。
 */

var se = new Set([1,2,3,4,5,1,2,8,9,3]);
console.log([...se]); // [1, 2, 3, 4, 5, 8, 9]
console.log(se.size); // 7
// 数组去重
var arry = [1,2,3,4,5,1,2,8,9,3];
console.log([...new Set(arry)]);  // [1, 2, 3, 4, 5, 8, 9]

// Set里 key 和 value 一样
for (let key of se.keys()) {
    console.log(key);
}

for (let val of se.values()) {
    console.log(val);
}

for (let item of se.entries()) {
    console.log(item);
}

for (let item of se) {
    console.log(item);
}

/**
 * Map 键值对存在
 */

var m = new Map();
m.set('name','jack');
m.get('name')

var map = new Map([['jack','hello'], ['tom', 'fuck']]);
map.get('jack');
map.get('tom');
