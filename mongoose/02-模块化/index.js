const db = require('./db/db');
const BookModel = require('./models/BookModel')

// 调用db
db(()=>{
  // 新增
  BookModel.create({
    name: '西游记',
    author: '吴承恩',
    price: 19.9
  }).then((data)=>{
    console.log(data);
  })
}, ()=>{
  console.log('连接失败');
})

  
