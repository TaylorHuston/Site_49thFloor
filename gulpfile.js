var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint');

gulp.task('default', ['watch']);

//JShint
gulp.task('jshint', function() {
  return gulp
    .src('src/assets/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
  gulp.watch('src/assets/js/**/*.js', ['jshint']);
});