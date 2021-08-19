/* eslint-disable no-undef */
// const webpack = require('webpack')
const path = require('path')
module.exports = {
  /* 部署应用包的基本URL */
  publicPath: process.env.NODE_ENV === 'production' ? '/gis' : './',
  /* 生产环境构建文件的目录 defalut: dist */
  // outputDir: 'dist',
  outputDir: process.env.outputDir,
  /* 放置生成的静态文件目录（js css img） */
  assetsDir: 'static',
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'
  },
  lintOnSave: process.env.NODE_ENV !== 'production' ? 'default' : false,
  runtimeCompiler: true,
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  css: {
    // requireModuleExtension: false,
    // extract: true, // 是否使用css分离插件 ExtractTextPlugin
    // sourceMap: false, // 开启 CSS source maps
    // loaderOptions: {} // css预设器配置项
  },
  devServer: {// 环境配置
    host: 'localhost',
    port: 5000,
    https: false,
    hotOnly: false,
    open: true, // 配置自动启动浏览器
    // proxy: process.env.NODE_ENV !== 'production' ? setting.proxy : {}
  },
  chainWebpack: (config) => {
    // const svgRule = config.module.rule('svg')
    // // 清除已有的所有 loader,如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    // svgRule.uses.clear()
    // // 添加要替换的 loader
    // svgRule
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]',
    //     include: [path.resolve('./src/icons')]
    //   })
  },
  configureWebpack: {
    resolve: {
      extensions: ['*', '.js', '.vue', '.json'],
      // 配置路径别名
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
        '@m': path.resolve('src/map')
        // 'assets': '@/assets',
        // 'common': '@/common',
        // 'components': '@/components',
        // 'network': '@/network',
        // 'views': '@/views',
      }
    },
    devtool: 'source-map'
  }
}