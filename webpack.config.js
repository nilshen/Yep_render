const path = require('path');

module.exports = {
  entry: './frontend/yep.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.jsx?$/, 
        exclude: /(node_modules)/, 
        use: {
          loader: 'babel-loader', 
          options: { 
            presets: ['@babel/env', '@babel/react'] 
          }
        }, 
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  devtool: 'source-map',
  resolve: { 
    extensions: [".js", ".jsx", "*"],
  }
};