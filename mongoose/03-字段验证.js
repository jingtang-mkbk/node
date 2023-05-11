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
      unique: true       // 唯一值
    }, 
    author: {
      type: String,
      default: '匿名'   // 默认值
    },
    style: {
      type: String,
      enum: ['言情','城市' ,'志怪', '恐怖']
    },
    price: Number,
    is_hot: Boolean,
    tags: Array,
    pub_time: Date,
    mix: mongoose.Schema.Types.Mixed,  // 任意类型，不受约束
    objectId: mongoose.Schema.Types.ObjectId,  // 对象id
    decimal28: mongoose.Schema.Types.Decimal128  // 高精度数字
  });

  // 创建模型对象  对文档操作的封装对象
  let BookModel = mongoose.model('books', BookSchema);

  // 新增
  BookModel.create({
    name: '西游记',
    // author: '吴承恩',
    style: '言情',
    price: 19.9,
    is_hot: true,
    tags: ['鬼怪','励志','社会'],
    pub_time: new Date()
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
