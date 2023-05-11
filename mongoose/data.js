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

  // 新增
  BookModel.create([
    {
      name: '西游记',
      author: '吴承恩',
      price: 19.9,
      is_hot: true,
    },
    {
      name: '红楼梦',
      author: '曹雪芹',
      price: 29.9,
      is_hot: true,
    },
    {
      name: '三国演义',
      author: '罗贯中',
      price: 9.9,
      is_hot: true,
    },
    {
      name: '大撒大撒',
      author: '大撒旦',
      price: 19.9,
      is_hot: false,
    },
    {
      name: '就',
      author: '看',
      price: 19.9,
      is_hot: false,
    },
    {
      name: '地方',
      author: '看',
      price: 19.9,
      is_hot: false,
    },
    {
      name: '好地方',
      author: '就',
      price: 19.9,
      is_hot: false,
    },
  ]).then((data)=>{
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
