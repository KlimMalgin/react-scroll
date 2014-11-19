/**
 * Created by bas on 19.11.2014.
 */
'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    server = require('gulp-express');

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

gulp.task('server', function () {
    return server.run({
        file: 'server.js'
    });
});

gulp.task('build', ['sass', 'server']);

gulp.task('default', ['build']);