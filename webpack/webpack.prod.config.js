const { resolvePath, baseConfig } = require('./webpack.base.config');
const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const FileManagerWebpackPlugin = require('filemanager-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:5].css' // 指定打包后的css
    }),
    new CleanWebpackPlugin(), //每次打包前清除dist
    new BundleAnalyzerPlugin(), //打包后显示文件体积
    new FileManagerWebpackPlugin({
      //打包后自动形成压缩文件
      events: {
        onEnd: {
          delete: [
            './dist/dist.zip' //删除之前的压缩包
          ],
          archive: [
            {
              source: './dist',
              destination: './dist/dist.zip'
            }
          ]
        }
      }
    })
  ]
});
