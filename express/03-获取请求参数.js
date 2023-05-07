const express = require('express');

const app = express();

app.get('/request', (req, res)=>{
  // 原生操作
  console.log(req.method);
  console.log(req.url);
  console.log(req.httpVerion);
  console.log(req.headers); 

  // express操作
  console.log(req.path);
  console.log(req.query);
  // 获取ip
  console.log(req.ip);
  // 获取请求头
  console.log(req.get('host'))

  res.end('request')
});

app.listen(9000, () => {
  console.log('服务启动中，端口9000监听中...')
})
