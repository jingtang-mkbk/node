const express = require('express');
const router = require('./13-router/index')

const app = express();

app.use(router);

app.get('/admin', (req, res)=>{
  // 判断URL中是否code === 521
   res.send('admin');
})

app.get('/setting', (req, res)=>{
  res.send('setting');
})

app.all('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>')
})

app.listen(9000, () => {
  console.log('服务启动中，端口9000监听中...');
})
