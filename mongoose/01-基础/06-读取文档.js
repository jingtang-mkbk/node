const mongoose = require('mongoose');

// 连接mongobd 服务
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

// 设置回调
// 设置连接成功的回调
mongoose.connection.once('open', ()=>{ 
  // 创建文档的解构对象
  // 设置集合中文档的属性以及属性值的类型
  let BookSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,    // 该属性不为空
    }, 
    author: {
      type: String,
      default: '匿名'   // 默认值
    },
    price: Number,
    is_hot: Boolean,
  });

  // 创建模型对象  对文档操作的封装对象
  let BookModel = mongoose.model('novels', BookSchema);

  // // 获取单条
  // BookModel.findOne({name: '大撒大撒'}).then(res => {
  //   console.log(res)
  // }).catch(err => {
  //   console.log(err)
  // })

  // // id获取
  // BookModel.findById('6460ab66f114064ad0c3d87b').then(res => {
  //   console.log(res)
  // }).catch(err => {
  //   console.log(err)
  // })

  // 批量获取
  // BookModel.find({author: '余华'}).then(res => {
  //   console.log(res)
  // }).catch(err => {
  //   console.log(err)
  // })

  // 获取所有
  BookModel.find().then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
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
