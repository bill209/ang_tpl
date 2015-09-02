var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: '',
    port: 8888,
    livereload: true
  });
});

gulp.task('htmlwatcher', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['*.html','views/*.html', 'css/*.css', 'js/*.js'], ['htmlwatcher']);
});

gulp.task('default', ['connect', 'watch']);
