const express = require('express');

const app = express();

// 静态资源中间件的设置
app.use(express.static(__dirname + '/public'));

app.get('/home', (req, res)=>{
  res.send('home');
});

app.all('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>')
})

app.listen(9000, () => {
  console.log('服务启动中，端口9000监听中...');
})
