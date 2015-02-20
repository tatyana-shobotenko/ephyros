/*global -$ */
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var webPath = 'public';
var srcPath = 'src';

gulp.task('styles', function () {
  return $.rubySass(srcPath + '/styles', {
    sourcemap: true,
    compass: true
  })
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe($.postcss([
      // more here https://github.com/postcss/postcss
      require('autoprefixer-core')({browsers: ['last 1 version']})
    ]))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(webPath + '/styles'));
});

gulp.task('watch', ['styles'], function () {

  gulp.watch(srcPath + '/styles/**/*', ['styles']);
});
