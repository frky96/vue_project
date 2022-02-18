module.exports = {
  //语法检查关闭
  lintOnSave: false,
  //代理服务器解决跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.98.123.211',
        pathRewrite: { '^/api': '' },
      },
    },
  },
  productionSourceMap: false
}