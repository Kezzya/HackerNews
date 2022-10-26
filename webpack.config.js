const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: "./index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: { presets: ["es2015", "react"] },
      },
    ],
  },
  stats: {
    colors: true,
  },
  loaders: [
    {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      loader: "file-loader",
      options: { name: "[name].[ext]", outputPath: "fonts/" },
    },
  ],
  devtool: "source-map",
};
