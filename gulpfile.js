/**
 * Created by nazariibanakh on 28.03.16.
 */
var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  // place code for your default task here
  gulp.src('')
    .pipe(webserver({
      host: '0.0.0.0',
      fallback: 'index.html'
    }))
});
