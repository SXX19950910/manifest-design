const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const config = require('./config/index')

const isDev = config.isDev
const publicPath = config.publicPath
const indexPath = config.indexPath
const externals = {
  vue: 'Vue',
  vuex: 'Vuex',
  'vue-router': 'VueRouter',
  'element-ui': 'ELEMENT',
  'view-design': 'iView'
}

const cdn = {
  externals,
  css: [
    'https://unpkg.com/element-ui/lib/theme-chalk/index.css',
    'https://unpkg.com/view-design/dist/styles/iview.css'
  ],
  js: [
    'https://cdn.staticfile.org/vue/2.6.12/vue.min.js',
    'https://cdn.staticfile.org/vuex/3.5.1/vuex.min.js',
    'https://cdn.staticfile.org/vue-router/3.0.3/vue-router.min.js',
    'https://unpkg.com/element-ui/lib/index.js',
    'https://unpkg.com/view-design/dist/iview.min.js'
  ]
}

module.exports = {
  publicPath,
  indexPath,
  productionSourceMap: config.isDev,
  css: {
    // extract: true,
    // sourceMap: false,
    // requireModuleExtension: true,
    loaderOptions: {
      scss: {
        additionalData: `@import "@/style/variable.scss";@import "@/style/mixin.scss";`
      }
    }
  },
  configureWebpack: config => {
    const com = new CompressionWebpackPlugin({
      algorithm: 'gzip',
      test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
      threshold: 10240,
      minRatio: 0.8
    })
    config.plugins.push(com)
    if (!isDev) {
      config.externals = cdn.externals
    }
  },
  chainWebpack(config) {
    config.plugin('html').tap(args => {
      if (!isDev) args[0].cdn = cdn
      return args
    })
  }
}
