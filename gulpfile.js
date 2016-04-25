/**
 * Created by Peter on 25/04/2016.
 */

var gulp = require('gulp');
var babel = require("gulp-babel");
var uglify = require('gulp-uglify');
var less = require('gulp-less');

gulp.task("js-transpile", function () {
    return gulp.src("./public/js/controllers/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("./public/js/transpiled"));
});

gulp.task('js-compression', function() {
    return gulp.src('./public/js/transpiled/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/dist/js'));
});

gulp.task('default', ['js-transpile','js-compression']);