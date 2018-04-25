const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",

  entry: "./src/index.js",

  output: {
    filename: "./hc.min.js",
    path: path.resolve(__dirname, "./"),
    publicPath: "/"
  },

  module: {
    rules: [
      {
        // js loader.
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
