const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/webpack.js', // 없으면 자동으로 index.js를 찾는 듯
  output: {
    path: path.resolve(__dirname, 'dist'), // 없으면 자동으로 /dist로 지정해주는 듯
    filename: 'main.js', // 없으면 자동으로 main.js로 해주는 듯
    publicPath: '/dist/', // url의 path를 설정
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
