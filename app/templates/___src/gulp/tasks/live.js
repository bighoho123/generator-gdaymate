import gulp from 'gulp';
import runSequence from 'run-sequence';

const liveTask = (cb) => {
  runSequence(
    [
      'browser-sync',
      'watch',
      'watch:js',
      'watch:dist'
    ],
    [
      'all-done'
    ],
    cb
  )
}

gulp.task('live', liveTask);
module.exports = liveTask;
