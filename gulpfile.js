/**
 * Created by bas on 19.11.2014.
 */
'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass');

var paths = {
    scss: ['scss/main.scss']
};

var dest = {
    css: 'css'
};

gulp.task('sass', function () {
    return gulp.src(paths.scss)
        .pipe(sass())
        .pipe(gulp.dest(dest.css));
});