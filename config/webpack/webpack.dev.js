const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(common, {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000,
    server: 'http',
    static: {
      directory: './public',
    }
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  output: {
    publicPath: "/",
    filename: "main.js",
  },
});