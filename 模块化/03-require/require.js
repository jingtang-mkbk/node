function require(file) {
  let absolutePath = path.resolve(__dirname, file);

  // 缓存检测 
  // 如果导入过了，直接return
  if (caches[absolutePath]) {
    return caches[absolutePath];
  }

  // 读取文件代码
  let code = fs.readFileSync(absolutePath).toString();

  // 包裹为一个函数，然后执行
  let module = {};
  let exports = module.exports = {};
  (function (exports, require, module, __filename, __dirname) {
    const test = {
      name: 'test'
    };

    module.exports = test;

    // 输出
    console.log(arguments.callee.toString())
  })(exports, require, module, __filename, __dirname);

  // 缓存结果
  caches[absolutePath] = module.exports;

  // 返回module.exports的值
  return module.exports;
}