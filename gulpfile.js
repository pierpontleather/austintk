

var gulp = require('gulp');
var sass = require('gulp-sass');
var replace = require('gulp-replace');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var babel = require("gulp-babel");
var concat = require("gulp-concat");

gulp.task('sass', function() {
  //root scss file (import all your partials into here)
  return gulp.src('./sass/styles.scss')
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      // add vendor prefixes
      .pipe(autoprefixer())
      // change the file name to be theme.scss.liquid file
      .pipe(rename('theme.scss.liquid'))
      // remove the extra set of quotations used for escaping the liquid string (we'll explain this in a sec)
      .pipe(replace('"{{', '{{'))
      .pipe(replace('}}"', '}}'))
      // save the file to the theme assets directory
      .pipe(gulp.dest('./assets/'));
});

gulp.task("babel", function () {
    return gulp.src(['./javascript/cart.js', './javascript/misc.js', './javascript/other.js'])
        .pipe(babel())
        .pipe(concat("babel-compiled.js"))
        .pipe(gulp.dest('./assets/'));
});

gulp.task('default', function () {
    // this assumes your sass is in a directory named sass
    gulp.watch(['./sass/**/*.scss'], ['sass']);
    gulp.watch(['./javascript/*.js'], ['babel']);
});