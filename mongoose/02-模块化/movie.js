const db = require('./db/db');
const MovieModel = require('./models/MovieModel')

db(()=>{
  MovieModel.create({title: '让子弹飞', director: '姜文'})
  .then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err)
  })
})
