const baseConfig = require("./webapck.base");
const webapckMerge = require("webpack-merge").default;
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = webapckMerge(baseConfig, {
  devServer: {
    static: {
      directory: process.cwd()
    },
    compress: false,
    port: 6001,
    hot: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "hello Vue",
      filename: "index.html",
      template: path.join(process.cwd(), "index.html"),
      minify: false,
      inject: false,
      templateParameters: {
        publicPath: process.cwd(),
        js: ["./node_modules/vue/dist/vue.runtime.global.js", "./index.js"],
        css: ["./index.css"]
      }
    })
  ]
});
module.exports = config;
