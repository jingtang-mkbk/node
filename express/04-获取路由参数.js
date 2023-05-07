const express = require('express');

const app = express();

app.get('/:id.html', (req, res)=>{
  // 获取URL参数
  console.log(req.params.id)
  res.setHeader('content-type', 'text/html;charset=utf-8');

  res.end('商品详情');
});

app.listen(9000, () => {
  console.log('服务启动中，端口9000监听中...');
})
