module.exports = {
  //检查语法
  lintOnSave: false,
  //代理服务器 跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.98.123.211',
        pathRewrite: { '^/api': '' },
      },
    },
  },
}