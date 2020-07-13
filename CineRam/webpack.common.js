const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
 
module.exports = {
   entry: "./src/app.js",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
   module: {
       rules: [
            {
                test: /\.css$/i,
                exclude: /style/,
                use: [
                    {
                        loader: 'to-string-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },           
            {
               test: /\.css$/i,
               include: /style/,
               use: [
                   {
                       loader: 'style-loader'
                   },
                   {
                       loader: 'css-loader'
                   }
               ]
           },
           {
               test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/gi,
               include: /image/,
               use: [
                    {
                    loader: 'file-loader',
                    options: {
                     name: '[name].[ext]',
                     outputPath: 'image/',
                     publicPath: 'image/'
                     }
                   },
                   {
                    loader: "image-webpack-loader",
                    options: {
                      bypassOnDebug: true,
                      disable: true
                    }
                  }
               ]
           }
       ]
   },
   plugins: [
       new HtmlWebpackPlugin({
           template: "./src/index.html",
           filename: "index.html"
       })
   ]
}