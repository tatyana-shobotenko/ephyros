/*global -$ */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpIf = require('gulp-if');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');

var srcPath = 'src';

gulp.task('styles', function () {
  return gulp.src(srcPath + '/styles/*.{scss,sass}')
    .pipe(sourcemaps.init())
    .pipe(gulpIf(/\.sass$/, sass({indentedSyntax: true})))
    .pipe(gulpIf(/\.scss$/, sass()))
    .pipe(postcss([
      // more here https://github.com/postcss/postcss
      require('autoprefixer')({browsers: ['last 1 version']})
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(srcPath + '/styles'));
});

gulp.task('watch', ['styles'], function () {
  gulp.watch(srcPath + '/styles/**/*.{sass,scss}', ['styles']);
});

// The development server (the recommended option for development)
gulp.task("default", ["watch"]);
