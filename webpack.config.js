var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

function isDirectory(dir) {
  return fs.lstatSync(dir).isDirectory();
}

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  })
];

if (process.env.COMPRESS) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  );
}

module.exports = {
  entry: {
    app: './src/app.js'
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
  plugins: plugins
};

if (process.env.NODE_ENV != 'production') {
  module.exports['devtool'] = 'inline-source-map';
}
