const express = require('express');

const app = express();

// 声明中间件
app.use((req, res, next) => {
  const referer = req.get('referer');

  if(referer){
    // 实例化
    const url = new URL(referer);
    const hostname = url.hostname;
    
    if (hostname !== '127.0.0.1') {
      res.status(404).send('<h1>404 Not Found</h1>');
      return; 
    } 
  }
    next();
})

app.use(express.static(__dirname + '/public'))


// app.get('/login', (req, res)=>{
//   res.sendFile(__dirname + '/11.html');
// });

app.listen(9000, () => {
  console.log('服务启动中，端口9000监听中...');
})
