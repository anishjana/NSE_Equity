// eslint-disable-next-line
// var webpack = require('webpack');

module.exports = {
  // publicPath: '/api/',
  chainWebpack: config => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true
    })
  }
}
