const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: ['@babel/polyfill', './src/index.js'],
  target: "node",
  output: {
    path: `${__dirname}/dist`,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
