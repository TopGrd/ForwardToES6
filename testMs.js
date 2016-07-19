var ms = require('./ms');
console.log(ms.getItem("foo"));
ms.setItem("foo","jack");
console.log(ms.getItem("foo"));
ms.clear();
console.log(ms.getItem("foo"));
