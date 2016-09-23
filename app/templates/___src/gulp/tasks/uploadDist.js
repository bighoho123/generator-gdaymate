import ftp from 'vinyl-ftp';
import config from '../../config.json';
import gutil from 'gulp-util';
import gulp from 'gulp';
import errorHandler from '../lib/errorHandler';

let conn = ftp.create( {
  host:     config.ftp.ftpHost,
  user:     config.ftp.ftpUser,
  password: config.ftp.ftpPass,
  parallel: 5,
  log: gutil.log
});

const uploadDistTask = () => {
	 return gulp.src(config.dist.base +'**/*', { base: '.', buffer: false } )
    .pipe( conn.newer( config.ftp.remote ).on('error', errorHandler) ) // only upload newer files
    .pipe( conn.dest( config.ftp.remote ).on('error', errorHandler) );
}

gulp.task('upload:dist', uploadDistTask);

