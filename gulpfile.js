var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: '',
    port: 8888,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['*.html','views/*.html', 'css/*.css', 'js/*.js'], ['html']);
});

gulp.task('ang_tpl', function() {
  connect.server({
    port: 8888
  });
  // run some headless tests with phantomjs
  // when process exits:
  connect.serverClose();
});

gulp.task('default', ['connect', 'watch']);
