const mongoose = require('mongoose');

// 连接mongobd 服务
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

/**
 * 条件控制
 * >        $gt
 * <        $lt
 * >=       $gte
 * <=       $lte
 * !==      $ne
 * 逻辑或   $or
 * 逻辑与   $and  
 * 正则     
 */

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

  // 价格小于20
  // BookModel.find({price: {$lt: 20}}).then(res => {
  //   console.log(res)
  // }).catch(err => {
  //   console.log(err)
  // })

  // 逻辑或
  // BookModel.find({$or: [{author: '曹雪芹'}, {author: '余华'}]}).then(res => {
  //   console.log(res)
  // }).catch(err => {
  //   console.log(err)
  // })

  // 逻辑与 
  // BookModel.find({$and: [{price: {$gt: 10}}, {price: {$lt: 30}}]}).then(res => {
  //   console.log(res)
  // }).catch(err => {
  //   console.log(err)
  // })

  // 正则
  BookModel.find({name: /三/}).then(res => {
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
