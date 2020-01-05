/* eslint-disable no-unused-vars */
// eslint-disable-next-line
// var webpack = require('webpack');
const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  assetsDir: '../../static/SPA',
  publicPath: '/api/search',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000'
      }
    }
  }
}
