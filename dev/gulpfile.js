var gulp = require('gulp'),
    sass = require('gulp-sass'),
    csscomb = require('gulp-csscomb'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    notify = require("gulp-notify");

gulp.task('css', function() {
    return gulp.src('./style.scss')
        .pipe(sass().on('error', sass.logError)) // Turn scss file into css
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 5%']}))
        .pipe(gulp.dest('../css'))
        .pipe(notify('CSS Success!'));
});

gulp.task('MINcss', function() {
    gulp.src('../css/style.css')
        .pipe(cleanCSS())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest('../css'))
        .pipe(notify('MINcss Success!'));
})

gulp.task('watch_scss', function() {
    gulp.watch('./style.scss', ['css']);
    gulp.watch('./_variables.scss', ['css']);
    gulp.watch('./_media.scss', ['css']);
});
gulp.task('watch_min', function() {
    gulp.watch('../css/style.css', ['MINcss'])
});

gulp.task('default', ['css', 'MINcss', 'watch_scss', 'watch_min']);



gulp.task('comb', function() {
    gulp.src('./style.scss')
        .pipe(csscomb())
        .pipe(gulp.dest('./'))
        .pipe(notify('cssComb Success!'));
})