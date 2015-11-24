var path = require('path');
// var webpack = require('webpack');

module.exports = {
  entry: './src/front/main.js',
  output: { filename: './.build/public/js/bundle.js' },
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
