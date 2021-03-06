/**
 * @Author: Li'Zhuo <TopGrd>
 * @Date:   2016-05-04 12:00:12
 * @Email:  topgrd@outlook.com
 * @Project: ES6
 * @Last modified by:   Li'Zhuo
 * @Last modified time: 2016-07-19 21:14:54
 */

let foo = ['jack', 'mike'];

foo.map(x => x.length);

let foofuc = (x) => x * 3;

let quux = () => ({
    jack: 'myname'
});

foofuc(3);
quux();

// this 绑定
function Person(name) {
    this.name = name;
}

Person.prototype.prefix = function (arr) {
    return arr.map(x => this.name + x);
};

//like follow function
function Person2(name) {
    this.name = name;
}

Person2.prototype.prefix = function (arr) {
    var _this = this;

    return arr.map(function (x) {
        return _this.name + x;
    });
};
