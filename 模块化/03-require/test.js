const test = {
  name: 'test'
};

module.exports = test;

console.log(test);

// 输出
// console.log(arguments.callee.toString())

// function (exports, require, module, __filename, __dirname) {
//   const test = {
//     name: 'test'
//   };

//   module.exports = test;

//   // 输出
//   console.log(arguments.callee.toString())
// }
