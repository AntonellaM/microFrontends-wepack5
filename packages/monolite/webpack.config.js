const HtmlWebpackPlugin = require("./node_modules/html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index",
  cache: false,

  devtool: "source-map",

  output: {
    filename: "[name].main.js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: "http://localhost:3004/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["main"],
    }),
  ],
};
