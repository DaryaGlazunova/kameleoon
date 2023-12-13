const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
  {
    devServer: {
      open: true,
      hot: true,
      historyApiFallback: true,
    },
    entry: "./src/index.tsx",
    mode: "development",
    target: "web",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      assetModuleFilename: "assets/[name][ext]",
      publicPath: "/",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
    ],
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".jsx"],
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@images": path.resolve(__dirname, "./src/assets/icons"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@styles": path.resolve(__dirname, "./src/assets/styles"),
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: "ts-loader",
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        },
        {
          test: /\.(c|sa|sc)ss$/i,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg)$/i,
          use: {
            loader: "image-webpack-loader",
          },
          type: "asset/resource",
        },
      ],
    },
  },
];
