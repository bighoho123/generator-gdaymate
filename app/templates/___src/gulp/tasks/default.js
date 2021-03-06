import gulp from 'gulp';
import runSequence from 'run-sequence';

const defaultTask = (cb) => {
  runSequence(
    [
      'browser-sync',
      'watch',
      'watch:js'
    ],
    [
      'all-done'
    ],
  )
}

gulp.task('default', defaultTask);
module.exports = defaultTask;
