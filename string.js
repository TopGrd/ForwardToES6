/**
 * @Author: Li'Zhuo
 * @Date:   2016-05-14 23:12:56
 * @Email:  topgrd@outlook.com
 * @Project: ES6
 * @Last modified by:   Li'Zhuo
 * @Last modified time: 2016-05-14 23:30:53
 */

//method includes and repeat
const name = 'jack slow fuck';
const nickName = 'jack';
if (name.includes(nickName)) {
    console.log('hello')
}

name.repeat(3); // return 'jack slow fuckjack slow fuckjack slow fuck'

/************模板字符串**********/

//不需要转义
let myName = `jack say "she is stupid", but i feel that he is a real fool.`;

//插入变量
const apple = 'Tiger';
const age = 13;

console.log(`his name is ${apple} and is ${age} years old.`);

// 多行文本
const myText = `fuck
this
stupid
guy`;

//内部表达式
const date = `today is ${new Date()}`;