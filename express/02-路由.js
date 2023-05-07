const express = require('express');

const app = express();

app.get('/', (req, res)=>{
  res.end('index')
});

app.get('/login', (req, res)=>{
  res.end('login')
});

app.listen(9000, () => {
  console.log('服务启动中，端口9000监听中...')
})
