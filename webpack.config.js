// resolve用来拼接绝对路径的方法
const {resolve} = require('path');

module.exports = {   //所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs
  entry: './03helloCube/helloCube.js',    // 入口起点
  output: {     // 输出
    filename: 'bundle.js',     // 输出文件名
    path: resolve(__dirname, 'build')    // 输出路径 , __dirname nodejs的变量，代表当前文件的目录绝对路径， <a href="https://juejin.im/post/5cb341596fb9a068553e1818" rel="noopener">https://juejin.im/post/5cb341596fb9a068553e1818</a>
  },
  module: {    // loader的配置 , 不同文件必须配置不同loader处理
    rules: []
  },
  mode: 'development', // 开发模式
}
