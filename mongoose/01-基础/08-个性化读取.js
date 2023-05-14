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

  /**
   * 筛选
   * 0 不要的字段
   * 1 要的字段
   */
  // BookModel.find().select({name: 1, author: 1}).exec().then(res => {
  //   console.log(res)
  // }).catch(err => {
  //   console.log(err)
  // })

  /**
   * 排序
   * -1  倒序
   * 1   升序
   */
  // BookModel.find().select({name: 1, author: 1, price: 1}).sort({price: -1}).exec().then(res => {
  //   console.log(res)
  // }).catch(err => {
  //   console.log(err)
  // })

  /**
   * 截取
   * skip    跳过
   * limit   限定
   */
  BookModel.find()
  .select({name: 1, author: 1, price: 1})
  .sort({price: -1})
  .skip(3)
  .limit(3)
  .exec()
  .then(res => {
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
