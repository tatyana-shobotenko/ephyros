/*global -$ */
'use strict';

var gulp = require('gulp');
var rubySass = require('gulp-ruby-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var gexpress = require('gulp-express');
var opn = require('opn');

var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

var webpackConfig = require('./webpack.config');

var webPath = 'public';
var srcPath = 'src';

gulp.task('styles', function () {
  return rubySass(srcPath + '/styles', {
    sourcemap: true,
    compass: true
  })
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(postcss([
      // more here https://github.com/postcss/postcss
      require('autoprefixer-core')({browsers: ['last 1 version']})
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(webPath + '/styles'));
});

gulp.task('serve', ['styles', 'webpack:build-dev'], function () {
  function startServer() {
    gexpress.run(['src/server.js']);
    gutil.log("[express]", "run");
  }

  startServer();

  gulp.watch(srcPath + '/styles/**/*', ['styles']);
  gulp.watch(srcPath + '/**/*.js', ['webpack:build-dev', startServer]);
  opn('http://localhost:3000');
});

// The development server (the recommended option for development)
gulp.task("default", ["serve"]);

// Production build
gulp.task("build", ["webpack:build"]);

gulp.task("webpack:build", function (callback) {

  var myConfig = Object.create(webpackConfig);
  myConfig.plugins = myConfig.plugins.concat(
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  );

  webpack(myConfig, function (err, stats) {
    if (err) throw new gutil.PluginError("webpack:build", err);
    gutil.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
});

// modify some webpack config options
var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function (callback) {
  // run webpack
  devCompiler.run(function (err, stats) {
    if (err) throw new gutil.PluginError("webpack:build-dev", err);
    gutil.log("[webpack:build-dev]", stats.toString({
      colors: true
    }));
    callback();
  });
});