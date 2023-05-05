const http = require('http');

const server  = http.createServer((request, response) => {
  response.statusCode = 200;
  // response.setHeader('content-type', 'text/html;charset=utf-8');
  // 自定义响应头
  response.setHeader('test', 'wulala');

  response.end('response');
});

server.listen(9000, ()=>{
  console.log('服务已启动...');
});