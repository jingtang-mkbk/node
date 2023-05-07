const express = require('express');

const app = express();


app.get('/home', (req, res)=>{
  res.send('home');
});

// 声明中间件
const checkCodeMiddleware = (req, res, next) => {
  if (req.query.code === '521'){
    next();
  } else {
    res.send('error');
  }
}

app.get('/admin', checkCodeMiddleware, (req, res)=>{
  // 判断URL中是否code === 521
   res.send('admin');
})

app.get('/setting', checkCodeMiddleware, (req, res)=>{
  res.send('setting');
})

app.all('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>')
})

app.listen(9000, () => {
  console.log('服务启动中，端口9000监听中...');
})
