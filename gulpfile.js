'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const minify = require('gulp-minify');

// deletes the dist folder
gulp.task('clean', require('del').bind(null, ['dist']));

// build js
gulp.task('script', function () {
    return gulp.src(['./src/*.js'])
        .pipe(rename('script.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist'));
});

// Create a new build in dist folder
gulp.task('build', gulp.series(
    'clean',
    'script'
));

// Watch for changes.
gulp.task('watch', () => gulp.watch(['./src/*.js'], gulp.series(['build'])));