const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const env = process.env
const isDev = env.NODE_ENV === 'development'
const publicPath = isDev ? '' : './dist'
const indexPath = isDev ? './dist' : './../index.html'
module.exports = {
  publicPath,
  indexPath,
  // outputDir: 'dist',
  // assetsDir: 'dist'
}
