/**
 * Created by bas on 19.11.2014.
 */
'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    server = require('gulp-express');

var browserify = require('browserify'),
    reactify = require('reactify'),
    deamdify = require('deamdify'),
    source = require('vinyl-source-stream');

var paths = {
    scss: ['scss/main.scss', 'scss/example.scss'],
    scripts: ['./src/example.js'],
    watch: {
        js: ['src/**/*.js'],
        scss: ['scss/**/*.scss']
    }
};

var dest = {
    js: 'build',
    css: 'css',
    buildCss: 'build'
};

gulp.task('sass', function () {
    return gulp.src(paths.scss)
        .pipe(sass())
        .pipe(gulp.dest(dest.css))
        .pipe(gulp.dest(dest.buildCss));
});

gulp.task('scripts', function () {
    return browserify(paths.scripts, {
        transform: [
            ['reactify', {everything: true}],
            'deamdify'
        ],
        insertGlobals: false,
        debug: false
    })
        .bundle()
        .pipe(source('example.js'))
        .pipe(gulp.dest(dest.js))
});

gulp.task('server', function () {
    return server.run({
        file: 'server.js'
    });
});

gulp.task('watch', ['build'], function (cb) {
    gulp.watch(paths.watch.js, ['scripts']);
    gulp.watch(paths.watch.scss, ['sass']);
    cb();
});

gulp.task('build', ['scripts', 'sass', 'server']);

gulp.task('default', ['watch']);