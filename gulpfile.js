var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var svgSprites = require('gulp-svg-sprites');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('gulp-webpack');
var debug = require('gulp-debug');

gulp.task('webpack', function () {
	return gulp.src('./app/modules/react.js')
		.pipe(webpack({
			entry: './app/modules/react.js',
			output: {
				filename: 'react.js'
			},
			module: {
				loaders: [
					{
						test: /\.jsx?$/,
						exclude: /(node_modules|bower_components)/,
						loader: 'babel-loader',
						query: {
							presets: ['react', 'es2015', 'stage-0'],
							plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
						}
					}
				]
			}
		}))
		.pipe(debug())
		.pipe(gulp.dest('./dist/assets/js/'))
});

gulp.task('styles', function () {
	return gulp.src('./app/styles/app.styl')
		.pipe(sourcemaps.init())
		.pipe(stylus())
		.pipe(concat('style.css'))
		.pipe(autoprefixer({
			browsers: ['last 10 versions'],
			cascade: false
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/assets/styles'));
});

gulp.task('templates', function () {
	return gulp.src('./app/pages/**/*.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('browser-sync', function () {
	return browserSync.init({
		server: {
			baseDir: './dist'
		},
		open: false
	});
});

gulp.task('scripts', function () {
	return gulp.src('./app/scripts/**/*.js')
		.pipe(gulp.dest('./dist/assets/js/'))
});

gulp.task('sprites', function () {
	return gulp.src('./app/svg/*.svg')
		.pipe(svgSprites({
			mode: 'symbols'
		}))
		.pipe(gulp.dest('./dist/assets/images/sprites/'));
});

gulp.task('copy', function () {
	gulp.src('./app/resources/assets/**/*')
		.pipe(gulp.dest('./dist/assets/'));

	gulp.src('./app/resources/bower_components/jquery/dist/**/*')
		.pipe(gulp.dest('./dist/assets/js/jquery/'));

	gulp.src('./app/data/*')
		.pipe(gulp.dest('./dist/assets/data/'));

	gulp.src('./app/resources/bower_components/owlcarousel/owl-carousel/**/*')
		.pipe(gulp.dest('./dist/assets/js/owlcarousel/'));
});

gulp.task('watch', function () {
	// global.watch = gulp.watch;

	gulp.watch(['./app/scripts/**/*.js'], ['scripts']);
	gulp.watch(['./app/modules/**/*'], ['webpack']);
	gulp.watch(['./app/styles/**/*.styl', './app/blocks/**/*.styl'], ['styles']);
	gulp.watch(['./app/pages/**/*.jade', './app/blocks/**/*.jade'], ['templates']);
});


gulp.task('default', ['browser-sync', 'templates', 'styles', 'scripts', 'webpack', 'watch']);