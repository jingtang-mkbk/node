const express = require('express');
const { singers } = require('./singer.json');

const app = express();

app.get('/singer/:id.html', (req, res)=>{
  const { id } = req.params;
  
  const result = singers.find(it => it.id === id);

  if (!result) {
    res.end('<h1>404 Not Found</h1>')
  }

  res.end(`
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>${result.other_name}</h1>
      <img src='${result.singer_pic}' />
    </body>
    </html>`);
});

app.listen(9000, () => {
  console.log('服务启动中，端口9000监听中...');
})
