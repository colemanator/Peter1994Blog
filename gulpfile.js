/**
 * Created by Peter on 25/04/2016.
 */

var gulp = require('gulp');
var babel = require("gulp-babel");
var uglify = require('gulp-uglify');
var LessPluginCleanCSS = require('less-plugin-clean-css');
var less = require('gulp-less');

gulp.task("javascript", function () {
    return gulp.src("./public/js/controllers/**/*.js")
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('./public/dist/js'));
});

gulp.task("less", function () {
    var cleancss = new LessPluginCleanCSS({ advanced: true });
    return gulp.src("./public/less/**/*.less")
        .pipe(less({
            plugins: [cleancss]
        }))
        .pipe(gulp.dest('./public/dist/css'));
});

gulp.task('watch', function() {
    gulp.watch('./public/js/controllers/**/*.js', ['javascript']);
    gulp.watch('./public/less/**/*.less', ['less']);
});

gulp.task('default', ['javascript','less','watch']);