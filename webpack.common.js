const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/index.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Production',
       template: "./src/template.html"
     }),
   ],
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   devServer: {
    watchFiles: ["./src/template.html","./src/style.css","./src/index.js"],
   },
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test:/\.s[ac]ss$/i,
        use:['style-loader','css-loader','sass-loader'],
        exclude:/node_modules/,
      },
       {
        test: /\.(woff2?|ttf|eot|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]'
        }
      },
    ],
  },
 };