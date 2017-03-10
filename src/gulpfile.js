
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	prefix = require('gulp-autoprefixer'),
	jspm = require('gulp-jspm'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	browserSync = require('browser-sync').create(),
	historyApiFallback = require('connect-history-api-fallback');

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./",
      middleware: [ historyApiFallback() ]
    }
  });

  gulp.watch('./components/*/*.scss', ['sass']);

  gulp.watch(['./*.html', './components/*/*.tpl']).on('change', browserSync.reload);

  gulp.watch(['./app.js', './components/*/*.js'], ['js-watch']);
});

gulp.task('sass', function (){
	gulp.src(['./all.scss'])
	.pipe(sass({
		includePaths: ['./all.scss'],
		outputStyle: 'expanded'
	}))
	.pipe(gulp.dest('./'))
	.pipe(prefix())
	.pipe(browserSync.stream());
});

gulp.task('optimize', function (){
	return gulp.src(['./app.js'])
	.pipe(jspm({selfExecutingBundle: true}))
	.pipe(rename('all.js'))
	.pipe(gulp.dest('./'));
});

gulp.task('js-watch', ['optimize'], function (done) {
    browserSync.reload();
    done();
});


gulp.task('default', ['optimize', 'sass', 'serve'], function() {});
