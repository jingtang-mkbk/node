const http = require('http');

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html;charset=utf-8');
 
  response.end('test11')
});

server.listen(9000, ()=>{
  console.log('服务已经启动...' );
});