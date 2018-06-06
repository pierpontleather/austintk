

var gulp = require('gulp');
var sass = require('gulp-sass');
var replace = require('gulp-replace');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
//var babel = require("gulp-babel");
var concat = require('gulp-concat');
var include = require('gulp-include');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var jsSrc = ['scripts.js', 'imports.js'];
var jsFolder = './javascript/'
var jsDist = './assets';
var jsWatch = './javascript/**/*.js';
var jsFiles = jsSrc;


gulp.task('js', function() {
    jsFiles.map( function( entry ){
        return browserify({
            entries: [jsFolder + entry]
        })
        .transform( babelify, {presets: ['env']} )
        .bundle()
        .pipe( source( entry ) )
        .pipe( rename({ extname: '.min.js' }) )
        .pipe( buffer() )
        .pipe( sourcemaps.init({ loadMaps: true }) )
        .pipe( uglify() )
        .pipe( sourcemaps.write( './' ) )
        .pipe( gulp.dest( jsDist ) )
    });
});

gulp.task('sass', function() {
  //root scss file (import all your partials into here)
  return gulp.src('./sass/styles.scss')
        .pipe(sourcemaps.init())
            .pipe(sass({
                includePaths: './node_modules/'//,
                // outputStyle: 'compressed'
            }))
            .on('error', console.error.bind(console))
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            // change the file name to be theme.scss.liquid file
            .pipe(rename('bundle.css'))
            // remove the extra set of quotations used for escaping the liquid string (we'll explain this in a sec)
            .pipe(replace('"{{', '{{'))
            .pipe(replace('}}"', '}}'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./assets/'));
});






/*
gulp.task("babel", function () {
    return gulp.src(['./javascript/cart.js', './javascript/misc.js', './javascript/other.js'])
        .pipe(babel())
        .pipe(concat("babel-compiled.js"))
        .pipe(gulp.dest('./assets/'));
});
*/
gulp.task('default', function () {
    // this assumes your sass is in a directory named sass
    gulp.watch(['./sass/**/*.scss'], ['sass']);
    gulp.watch(['./javascript/*.js'], ['js']);
});