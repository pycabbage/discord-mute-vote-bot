const path = require('path');
const { ProvidePlugin } = require("webpack");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: ["@babel/polyfill", "./src/index.js"],
  target: "node",
  output: {
    path: `${__dirname}/dist`,
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /token.template.js/],
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      "zlib-sync": false,
    },
  },
  // plugins: [
  //   new ProvidePlugin({
  //     "node-fetch": "node-fetch"
  //   })
  // ],
  // external: {
  //   "node-fetch": "node-fetch",
  // }
};
