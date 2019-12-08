'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// Bundle js
gulp.task('js-bundle', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('dist/js/'));
});

// Compress the js bundle
gulp.task('compress', function() {
    return gulp.src('dist/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Build css
gulp.task('sass', function() {
    return gulp.src('src/scss/bundle.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

// Minify css
gulp.task('minify-css', function() {
    return gulp.src('dist/css/bundle.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});

// Default task
gulp.task('default', function() {
    gulp.start('js-bundle');
    gulp.start('sass');
    setTimeout(function() {
        gulp.start('minify-css');
        gulp.start('compress');
    }, 500);
});
