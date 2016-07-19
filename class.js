class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    interview() {
        console.log("i'm" + this.name + ',' + this.age + ',' + this.sex);
    }
}

class Man extends Person {
    constructor(name, age, sex, hobby) {
        /*
        warning: 在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，是基于对父类实例加工，只有super方法才能返回父类实例。
         */

        super(name, age, sex);
        this.hobby = hobby;
    }
    interview() {

        super.interview();
        console.log('my hobby is' + this.hobby);
    }
}
let jack = new Person('jack', '18', 'male');
let ming = new Man('ming', '19', 'famle', 'reading');
console.log(jack.interview());
console.log(ming.interview());

// 子类的prototype指向父类，子类的prototype的__proto__指向父类的prototype
console.log(Man.prototype); // Person
console.log(Person.prototype); // Object
console.log(Man.prototype.__proto__); // Object

// 原生构造函数的继承
class MyArray extends Array {
    constructor(...args) {
        super(...args);
    }

    sayHi() {
        for (let i of this) {
            console.log(i + "hi");
        }
    }
}

var ary = new MyArray(5, 53, 1, 3);
ary.sayHi();

// get and set

class TestGero {
    constructor() {

    }
    set name(name) {
        return "name:" + name;
    }

    get name() {
        return "hello";
    }
}


var test = new TestGero();
test.name = "jack";
console.log(test.name);

// static

class StaticDemo {
    constructor() {

    }

    static sayHello() {
        return "hello";
    }
}

class ChildStatic extends StaticDemo {
    constructor() {
        super();
    }
}

console.log(StaticDemo.sayHello());

console.log(ChildStatic.sayHello());
