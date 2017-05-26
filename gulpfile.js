// /////////////////////////////////////////////////
// GULP
// /////////////////////////////////////////////////

var gulp = require('gulp');

// /////////////////////////////////////////////////
// GULP tasks
// /////////////////////////////////////////////////

var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var browserSync = require("browser-sync");
var pug = require('gulp-pug');
var reload = browserSync.reload;

// /////////////////////////////////////////////////
// COMPRESS IMAGES
// /////////////////////////////////////////////////

gulp.task('compress-images', function(){
	return gulp.src('assets/pre-images/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images/'));
});

// /////////////////////////////////////////////////
// STYLES
// /////////////////////////////////////////////////

gulp.task('styles', function(){
  return gulp.src('assets/sass/**/*.scss')
  	.pipe(plumber())
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('assets/pre-css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({stream:true}));
});

// /////////////////////////////////////////////////
// PUG - HTML preprocessor
// /////////////////////////////////////////////////

gulp.task('pug', function(){
  gulp.src('./assets/templates/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./dist'))
})

// /////////////////////////////////////////////////
// HTML Task
// /////////////////////////////////////////////////

gulp.task("html", function(){
    gulp.src("dist/**/*.html")
    .pipe(reload({stream:true}));
});

// /////////////////////////////////////////////////
// Browser-Sync Task
// /////////////////////////////////////////////////

gulp.task('browser-sync', function(){
  browserSync({
    server:{
      baseDir:"./dist/"
    }
  })
});

// /////////////////////////////////////////////////
// WATCH
// /////////////////////////////////////////////////
gulp.task('watch', function(){
  gulp.watch('assets/sass/**/*.scss', ['styles']); 
  gulp.watch('assets/templates/*.pug', ['pug']);
});

// /////////////////////////////////////////////////
// UGLIFY MAIN.JS
// /////////////////////////////////////////////////

gulp.task('uglify', function(){
	gulp.src('assets/js/*')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'));
});


// /////////////////////////////////////////////////
// Default Task
// /////////////////////////////////////////////////

gulp.task('default',[ 'styles', 'uglify', 'pug', 'html', 'browser-sync', 'watch' ]);