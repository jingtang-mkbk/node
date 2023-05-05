const http = require('http');

const server = http.createServer((request, response) => {
  // let url = new URL('http://www.xxx.com/search?a=100&b=200')
  let url = new URL(request.url, 'http://127.0.0.1')
  console.log('路径:', url.pathname)
  console.log('keyword 查询字符串:', url.searchParams.get('keyword'))
  response.end('url new')
});

server.listen(9000, () => {
  console.log('服务已经启动...')
});