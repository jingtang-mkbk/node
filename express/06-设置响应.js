const express = require('express');

const app = express();

app.get('/response', (req, res)=>{
  // 原生响应
  // res.statusCode = 404;
  // res.statusMessage = 'love';

  // res.setHeader('xxx', 'yyy');
  // res.write('hello express');
  // res.end('response');

  // express 响应
  // res.status(500);
  // res.set('aaa', 'bbb');
  // res.send('你好 express');

   res.status(500).set('aaa', 'bbb').send('你好 express')
});

app.listen(9000, () => {
  console.log('服务启动中，端口9000监听中...');
})
