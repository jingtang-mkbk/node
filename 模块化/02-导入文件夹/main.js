/**
 * 先检测是否有package.json，有找对应的main的文件夹
 * 如果没有main或者package.json不存在
 * 则导入index.js或index.json
 * 如果还没有，则报错
 */

const m = require('./module');

console.log(m)