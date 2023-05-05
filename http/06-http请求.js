const http = require('http');

const server = http.createServer((request, response) => {
  let { method, url } = request;
  let { pathname } = new URL(url, 'http://127.0.0.1')
  response.setHeader('Content-Type', 'text/html;charset=utf-8');
 
  if (method === 'GET' && pathname === '/login'){
    response.end('登录界面')
  } else if (method === 'GET' && pathname === '/register') {
    response.end('注册页面')
  } else {
    response.end('404')
  }
});

server.listen(9000, ()=>{
  console.log('服务已经启动...' );
});