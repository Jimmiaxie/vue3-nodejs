const path = require('path');
const fs = require('fs');
const { babel } = require('@rollup/plugin-babel');
const vue = require('rollup-plugin-vue');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const postcss = require('rollup-plugin-postcss');
const replace = require('@rollup/plugin-replace');
const html = require('@rollup/plugin-html');
const serve = require('rollup-plugin-serve');

const resolve = (name) => path.join(__dirname, name);
const babelOption = { "presets": ['@babel/preset-env',], 'babelHelpers': 'bundled' }

module.exports = {
  input: resolve("src/index.js"),
  output: {
    file: resolve("dist/index.js")
  },
  plugins: [
    new vue(),
    postcss({
      extract: true,
      plugins: []
    }),
    nodeResolve(),
    commonjs(),
    babel(babelOption),
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      preventAssignment: true
    }),
    html({
      fileName: "index.html",
      template: () => {
        const htmlFilePath = resolve("index.html");
        const html = fs.readFileSync(htmlFilePath, { encoding: 'utf8' });
        return html;
      }
    }),
    process.env.NODE_ENV === "development" ? serve({ port: 6001, contentBase: 'dist' }) : null
  ]
}