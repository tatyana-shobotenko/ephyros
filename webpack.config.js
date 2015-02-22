var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    client: './src/client.js',
    ie: './src/ie.js'
  },

  output: {
    path: 'public/__build__',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      {test: /\.jsx?$/, loader: 'jsx-loader?harmony'}
    ]
  },
  plugins: []
};
