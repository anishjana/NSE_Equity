 // eslint-disable-next-line 
var webpack = require('webpack');

module.exports = {
    chainWebpack: config => {
      config.module.rule('eslint').use('eslint-loader').options({
        fix: true
      })
    }
  }