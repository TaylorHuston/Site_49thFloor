var gulp = require('gulp'),
  less = require('gulp-less'),
  clean = require('gulp-clean'),
  concatCSS = require('gulp-concat-css'),
  prefix = require('gulp-autoprefixer'),
  dest = 'dist/';

gulp.task('clean', function () {
  return gulp.src(dest)
    .pipe(clean());
});

gulp.task('convertLess', function () {
  return gulp.src('src/teenytiny.less')
    .pipe(less())
    .pipe(prefix({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('src'));
});

gulp.task('copy', ['clean', 'convertLess'], function () {
  return gulp.src('src/teenytiny.css')
    .pipe(concatCSS('teenytiny.css'))
    .pipe(gulp.dest(dest+'css'));
});

gulp.task('dev', ['convertLess']);
gulp.task('build', ['clean', 'convertLess', 'copy']);