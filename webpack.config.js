const path = require('path')

module.exports = {
  output: {
    filename: 'main.js',
    // 这个路径需要一个绝对路径，不然会报错
    path: path.resolve(__dirname, './dist')
  }
}