
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	prefix = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
  babel = require('gulp-babel'),
	concat = require('gulp-concat'),
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

  gulp.watch(['./app.js', './components/*/*.js'], ['optimize'])
  .on('change', browserSync.reload);
});

gulp.task('sass', function (){
	gulp.src(['./all.scss'])
	.pipe(sass({
		includePaths: ['./all.scss'],
		outputStyle: 'expanded'
	}))
	.pipe(prefix(
		"last 1 version", "> 1%", "ie 8", "ie 7"
		))
	.pipe(gulp.dest('./'))
	.pipe(browserSync.stream());
});

gulp.task('optimize', function (){
	gulp.src(['./app.js', './components/*/*.js'])
	.pipe(babel({
    presets: ['es2017']
  }))
  .pipe(concat('all.js'))
	// .pipe(uglify())
	.pipe(gulp.dest('./'));
});


gulp.task('default', ['serve'], function() {});
