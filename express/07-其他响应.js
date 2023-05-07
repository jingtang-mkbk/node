const express = require('express');

const app = express();

app.get('/other', (req, res)=>{
  // 重定向
  // res.redirect('https://www.baidu.com');

  // 下载响应
  // res.download(__dirname + '/package.json');

  // JSON响应
  // res.json({
  //   name: '玛卡巴卡',
  //   slogon: '乌西迪西'
  // });

  // 响应文件内容
  res.sendFile(__dirname + '/test.html');
});

app.listen(9000, () => {
  console.log('服务启动中，端口9000监听中...');
})
