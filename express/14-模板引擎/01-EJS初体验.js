const ejs = require('ejs');
const fs = require('fs');

const str = '玛卡巴卡';

const weather = '天气不错';

const htmlStr = fs.readFileSync('./01.html').toString();

const res = ejs.render(htmlStr, { str: str, weather });

console.log(res);