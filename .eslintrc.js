/**
 * @Author: Li'Zhuo <TopGrd>
 * @Date:   2016-05-04 13:19:20
 * @Email:  topgrd@outlook.com
 * @Project: ES6
 * @Last modified by:   Li'Zhuo
 * @Last modified time: 2016-07-18 19:50:15
 */

module.exports = {
    "env": {
        "browser": true,
        "commonjs": true
    },
    "parserOptions": {
        "ecmaVersion": 6
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": 0
    }
};
