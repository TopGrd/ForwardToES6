/**
 * @Author: Li'Zhuo
 * @Date:   2016-07-28 21:30:36
 * @Email:  topgrd@outlook.com
 * @Project: ES6
 * @Last modified by:   Li'Zhuo
 * @Last modified time: 2016-07-28 21:56:03
 */

/**
 * 代理Proxy
 * @param {target} {} [代理目标]
 * @param {handler} [拦截行为]
 */
var proxy = new Proxy({}, {
    get: function () {
        return 35;
    }
})

proxy.time; // 35
proxy.mark; // 35

/*var handler = {
    get: function (target, property) {
        if (property === 'prototype') {
            return Object.property;
        }

        return 'hello' + property;
    },

    apply: function (target, thisBinding, args) {
        return args[0];
    },

    construct: function (target, args) {
        return {
            value: args[1]
        };
    }
};

var proxy2 = new Proxy({}, handler);*/

var person = {
    name: 'jack'
};

var proxy3 = new Proxy(person, {
    get: function (target, property) {
        if (property in target) {
            return target[property]
        }
        else {
            throw new ReferenceError("Property \"" + property + "\" does not exist.");
        }
    }
});

proxy3.name; // jack
proxy3.age; // ReferenceError: Property "age" does not exist.
