var gulp = require('gulp'),
  gutil = require('gulp-util'),
  copy = require('gulp-copy'),
  jshint = require('gulp-jshint'),
  clean = require('gulp-clean'),
  concatCSS = require('gulp-concat-css'),
  prefix = require('gulp-autoprefixer'),
  fileinclude = require('gulp-file-include')

gulp.task('default', ['watch']);

//JShint
gulp.task('jshint', function () {
  return gulp
    .src('src/assets/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('clean', function () {
  return gulp.src('public/')
    .pipe(clean());
})

//Copy
gulp.task('copy', function () {
  return gulp.src('src/**/*.*')
    .pipe(gulp.dest('public/'));
})


gulp.task('fileinclude', ['clean'], function () {
  return gulp
    .src('src/index.html')
    .pipe(fileinclude())
    .pipe(gulp.dest('public/'));
})

gulp.task('build', ['clean', 'fileinclude'])

gulp.task('watch', function () {
  gulp.watch('src/assets/js/**/*.js', ['jshint']);
  gulp.watch('src/**/*', ['copy']);
});