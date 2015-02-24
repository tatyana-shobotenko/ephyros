/*global -$ */
'use strict';

var gulp = require('gulp');
var rubySass = require('gulp-ruby-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');

var srcPath = 'src';

gulp.task('styles', function () {
  return rubySass(srcPath + '/styles', {
   // sourcemap: true,
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
    .pipe(gulp.dest(srcPath + '/styles'));
});

gulp.task('watch', ['styles'], function () {
  gulp.watch(srcPath + '/styles/**/*.{sass,scss}', ['styles']);
});

// The development server (the recommended option for development)
gulp.task("default", ["watch"]);
