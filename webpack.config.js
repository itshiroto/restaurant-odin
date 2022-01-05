const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const envMode = process.env.NODE_ENV;

module.exports = {
  mode: envMode,
  entry: './src/index.js',
  // devtool: 'inline-source-map',
  devServer: {
    // contentBase: './dist',
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 9000,
    // host: '0.0.0.0',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          envMode === 'development' ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          // "postcss-loader",
          // "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [].concat(envMode === 'development' ? [] : [new MiniCssExtractPlugin()]),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
