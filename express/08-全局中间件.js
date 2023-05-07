const express = require('express');
const fs = require('fs');
const path = require('path')

const app = express();

// 生命中间件函数
function recordMiddleware(req, res, next) {
  // 获取url ip
  const { url, ip } = req;
  
  // 生产access.log文件
  fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\r\n`);

  // 调用next, 调用next 会执行路由回调
  next();
}

// 使用中间件函数
app.use(recordMiddleware);

app.get('/home', (req, res)=>{

  

  res.send('home');
});

app.get('/admin', (req, res)=>{
  res.send('admin');
})

app.all('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>')
})

app.listen(9000, () => {
  console.log('服务启动中，端口9000监听中...');
})
