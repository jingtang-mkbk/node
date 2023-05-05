const http = require('http');
const url = require('url')

const server = http.createServer((request, response) => {

  // 解析url
  let res = url.parse(request.url, true)

  let pathname = res.pathname
  console.log(pathname)
  let keyword = res.query.keyword;
  console.log(keyword)

  response.end('url')
});

server.listen(9000, () => {
  console.log('服务已经启动...')
});