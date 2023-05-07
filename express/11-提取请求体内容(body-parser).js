/**
 * GET   /login  显示表单页面
 * POST  /login  获取账号密码
 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// 解析JSON格式的请求体的中间件
const jsonParser = bodyParser.json();
// 解析querystring格式请求体的中间件
const urlencodedParser = bodyParser.urlencoded({ extended: false });


app.get('/login', (req, res)=>{
  res.sendFile(__dirname + '/11.html');
});

app.post('/login', urlencodedParser, (req, res)=>{
  console.log(req.body);
  res.send('获取用户数据');
});

app.listen(9000, () => {
  console.log('服务启动中，端口9000监听中...');
})
