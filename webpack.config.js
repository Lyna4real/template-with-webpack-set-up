const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // wipes dist/ before each build
  },
  module: {
  rules: [
    { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    { test: /\.(png|jpe?g|svg|gif)$/i, type: 'asset/resource' },
    { test: /\.html$/i, use: ['html-loader'] },
  ],
},
plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  devtool: 'eval-source-map',
  devServer: {
  static: './dist',
  hot: true,
  open: true,
  port: 3000,
  watchFiles: ['./src/index.html'],
},
};

