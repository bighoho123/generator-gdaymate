import config from '../../config.json';
import gulp from 'gulp';


const watchDist = () => {
	gulp.watch( config.dist.base +'**/*',['upload:dist']);
}

gulp.task('watch:dist', watchDist);

