const baseConfig = require("./webapck.base");
const webapckMerge = require("webpack-merge").default;
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const config = webapckMerge(baseConfig, {
  optimization: {
    minimizer: [new TerserPlugin({}), new CssMinimizerPlugin({})]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hello Vue",
      filename: "index.html",
      template: "index.html",
      minify: false,
      inject: false,
      templateParameters: {
        publicPath: path.join(__dirname),
        js: ["https://unpkg.com/vue@3/dist/vue.global.js", "./index.js"],
        css: ["./index.css"]
      }
    })
  ]
});

module.exports = config;
