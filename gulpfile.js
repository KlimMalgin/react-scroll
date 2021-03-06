/**
 * Created by bas on 19.11.2014.
 */
'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    server = require('gulp-express');

var react = require('gulp-react');

var browserify = require('browserify'),
    reactify = require('reactify'),
    deamdify = require('deamdify'),
    source = require('vinyl-source-stream');

var paths = {
    scss: ['scss/main.scss', 'scss/example.scss'],
    scripts: ['./src/example.js'],
    jsx: ['src/**/*.js'],
    watch: {
        js: ['src/**/*.js'],
        scss: ['scss/**/*.scss']
    }
};

var dest = {
    example: 'example',
    js: 'build',
    css: 'css',
    exampleCss: 'example'
};

gulp.task('jsx', function () {
    return gulp.src(paths.jsx)
        .pipe(react())
        .pipe(gulp.dest(dest.js));
});

gulp.task('sass', function () {
    return gulp.src(paths.scss)
        .pipe(sass())
        .pipe(gulp.dest(dest.css))
        .pipe(gulp.dest(dest.exampleCss));
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
        .pipe(gulp.dest(dest.example))
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

gulp.task('build', ['jsx', 'scripts', 'sass', 'server']);

gulp.task('default', ['watch']);