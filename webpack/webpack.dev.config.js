const { resolvePath, baseConfig } = require('./webpack.base.config');
const path = require('path');
const { merge } = require('webpack-merge');
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: 9000,
    open: true,
    historyApiFallback: {
      disableDotRule: true
    }
  }
});
