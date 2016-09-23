import gulp from 'gulp';
import notify from 'node-notifier';
import path from 'path';


const allDoneTask = () => {
	return notify.notify({
		"title":"All Tasks Done!",
		"message":"Go and have some VB #hardearnedthirst :)",
		"contentImage":path.join(__dirname,'../../gulp.png'),
		"icon":path.join(__dirname,'../../gulp.png')
	});
}

gulp.task('all-done',allDoneTask)

module.exports = allDoneTask