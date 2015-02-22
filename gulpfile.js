/*global -$ */
'use strict';

var gulp = require('gulp');
var rubySass = require('gulp-ruby-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var gexpress = require('gulp-express');

var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

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

gulp.task("webpack", function (callback) {
  // run webpack
  webpack(require('./webpack.config'),
    function (err, stats) {
      if (err) throw new gutil.PluginError("webpack", err);
      gutil.log("[webpack]", stats.toString({
        // output options
      }));
      callback();
    });
});

gulp.task('serve', ['styles', 'webpack'], function () {
  function startServer() {
    gexpress.run(['src/server.js']);
    gutil.log("[express]", "run");
  }

  startServer();

  gulp.watch(srcPath + '/styles/**/*', ['styles']);
  gulp.watch(srcPath + '/**/*.js', ['webpack',startServer]);
  //gulp.watch([srcPath + '/**/*.ejs', srcPath + '/**/*.js'] [startServer]);
});
