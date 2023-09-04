const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: path.join(process.cwd(), "src/index.js")
  },
  output: {
    path: path.join(process.cwd(), "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|jpg|svg|jpeg|gif)$/,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
  externals: { vue: "window.Vue" }
};
