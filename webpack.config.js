var path = require('path');

module.exports = {
  entry: './src/front/main.jsx',
  output: { filename: './app/assets/javascripts/bundle.js' },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
