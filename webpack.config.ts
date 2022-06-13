import HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import { Configuration } from "webpack";

const configuration: Configuration = {
  entry: "./src/index.tsx",
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    extensions: [".tsx", ".ts", ".js"],
  },
  devtool: "source-map",
  node: {
    global: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.join(__dirname, "src"),
        use: {
          loader: "ts-loader",
          options: {
            configFile: "tsconfig-webpack.json",
          },
        },
      },
      {
        test: /\.(svg|woff2|png)$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
                localIdentName: "[local]-[hash:base64:5]",
              },
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "head",
      template: "src/assets/index.html",
      hash: true,
      publicPath: "/",
    }),
  ],
};

export default configuration;
