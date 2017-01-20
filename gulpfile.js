var gulp = require('gulp'),
    gutil = require('gulp-util'),
    copy = require('gulp-copy'),
    jshint = require('gulp-jshint'),
    fileinclude = require('gulp-file-include')

gulp.task('default', ['watch']);

//JShint
gulp.task('jshint', function() {
  return gulp
    .src('src/assets/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

//Copy
gulp.task('copy', function() {
   return gulp.src('src/**/*.*')
    .pipe(gulp.dest('public/'));
})

gulp.task('build', function() {
  gulp
    .src('src/index.html')
    .pipe(fileinclude())
    .pipe(gulp.dest('public/'));
})

gulp.task('watch', function() {
  gulp.watch('src/assets/js/**/*.js', ['jshint']);
  gulp.watch('src/**/*',  ['copy']);
});
