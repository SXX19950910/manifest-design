const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './dist',
  indexPath: './../index.html'
  // outputDir: 'dist',
  // assetsDir: 'dist'
}
