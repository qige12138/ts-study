const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const resolvePath = (_path) => path.resolve(__dirname, _path);
const MODE =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';
const SRC = '../src';
const baseConfig = {
  target: 'web',
  entry: resolvePath(`${SRC}/index.tsx`),
  output: {
    path: resolvePath(`../dist`),
    filename: 'js/[name].[hash:5].js',
    publicPath: MODE === 'production' ? './' : '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      src: resolvePath(`${SRC}`)
    }
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.js(x?)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env', // 处理ES6新语法兼容
                {
                  useBuiltIns: 'usage',
                  corejs: 3 // core-js处理ES6新API兼容
                }
              ],
              require.resolve('@babel/preset-react') // 处理React兼容性
            ],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MODE === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        // exclude:/node_modules/,
        use: [
          MODE === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', //打包后生成的路径
      title: 'typescript', //标题
      template: resolvePath(`${SRC}/index.html`), //html模板
      inject: 'body', //script标签在body下面
      hash: true, //在打包的资源插入html会加上hash值
      //压缩
      minify: {
        removeComments: true, //去掉注释
        collapseInlineTagWhitespace: true, //去掉空格
        removeAttributeQuotes: true //去除标签的引号  如id="test"=> id=test
      }
    })
  ]
};

module.exports = {
  resolvePath,
  baseConfig
};
