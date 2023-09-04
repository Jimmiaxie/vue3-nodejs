const path = require("path");
const { VueLoaderPlugin } = require("vue-loader/dist/index");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webapckMerge = require("webpack-merge").default;

const baseConfig = {
  mode: process.env.NODE_ENV,
  entry: {
    index: path.join(__dirname, "src/index.js")
  },
  output: {
    path: path.join(__dirname, "dist"),
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

let config;
if (process.env.NODE_ENV === "development") {
  config = webapckMerge(baseConfig, {
    devServer: {
      static: {
        directory: path.join(__dirname)
      },
      compress: false,
      port: 6001,
      hot: false
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "hello Vue",
        filename: "index.html",
        template: "./index.html",
        minify: false,
        inject: false,
        templateParameters: {
          publicPath: path.join(__dirname),
          js: ["./node_modules/vue/dist/vue.runtime.global.js", "./index.js"],
          css: ["./index.css"]
        }
      })
    ]
  });
} else {
  config = webapckMerge(baseConfig, {
    optimization: {
      minimizer: [new TerserPlugin({}), new CssMinimizerPlugin({})]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "hello Vue",
        filename: "index.html",
        template: "./index.html",
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
}
module.exports = config;

// module.exports = {
//   mode: "production",
//   entry: {
//     index: path.join(__dirname, "src/index.js")
//   },
//   output: {
//     path: path.join(__dirname, "dist"),
//     filename: "[name].js"
//   },
//   module: {
//     rules: [
//       {
//         test: /\.vue$/,
//         use: ["vue-loader"]
//       },
//       {
//         test: /\.(css|less)$/,
//         use: [MiniCssExtractPlugin.loader, "css-loader"]
//       }
//     ]
//   },
//   plugins: [
//     new VueLoaderPlugin(),
//     new MiniCssExtractPlugin({
//       filename: "[name].css"
//     }),
//     new HtmlWebpackPlugin({
//       title: "hello Vue",
//       filename: "index.html",
//       template: "./index.html",
//       minify: false,
//       inject: false,
//       templateParameters: {
//         publicPath: path.join(__dirname),
//         js: ["./node_modules/vue/dist/vue.runtime.global.js", "./index.js"],
//         css: ["./index.css"]
//       }
//     })
//   ],
//   externals: { vue: "window.Vue" },
//   devServer: {
//     static: {
//       directory: path.join(__dirname)
//     },
//     compress: false,
//     port: 6001,
//     hot: false
//   },
//   optimization: {
//     minimizer: [new TerserPlugin({}), new CssMinimizerPlugin({})]
//   }
// };
