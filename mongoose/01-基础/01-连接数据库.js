const mongoose = require('mongoose');

// 连接mongobd 服务
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

// 设置回调
// 设置连接成功的回调
mongoose.connection.once('open', ()=>{ 
  // 创建文档的解构对象
  // 设置集合中文档的属性以及属性值的类型
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number
  });

  // 创建模型对象  对文档操作的封装对象
  let BookModel = mongoose.model('books', BookSchema);

  // 新增
  BookModel.create({
    name: '西游记',
    author: '吴承恩',
    price: 19.9
  }).then((data)=>{
    console.log(data);
  })
});

// 设置连接错误的回调
mongoose.connection.on('error', ()=>{
  console.log('连接错误')
});

// 设置连接关闭的回调
mongoose.connection.on('close', ()=>{
  console.log('连接关闭')
});
