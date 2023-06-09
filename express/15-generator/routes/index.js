var express = require('express');
const formidable = require('formidable')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 显示网页
router.get('/portrait', function(req, res) {
  res.render('portrait');
});

// 处理文件上传
router.post('/portrait', function(req, res) {
  // 创建表单对象
  const form = formidable({
    multiples: true,
    // 设置上传文件的保存目录
    uploadDir: __dirname + '/../public/images',
    // 保持文件后缀
    keepExtensions: true
   });
  // 解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(); 
      return;
    }
    // console.log(fields);   // text radio checkbox select
    // console.log(files);    // file

    // 服务器保存该图片的URL
    const url = '/images/' + files.portrait.newFilename;  // 将来降此数据保存在数据库中

    res.send(url)
  })
});

module.exports = router;
