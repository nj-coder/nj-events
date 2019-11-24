'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const minify = require('gulp-minify');
const rollup = require('gulp-rollup');
const destFolder = './dist';

// deletes the dist folder
gulp.task('clean', require('del').bind(null, ['dist']));

// build js
gulp.task('build', function () {
    return gulp.src(['./src/*.js'])
        .pipe(rollup({
            format: "umd",
            moduleName: "NJEvents",
            entry: "./src/index.js"
        }))
        .pipe(rename("script.js"))
        .pipe(minify())
        .pipe(gulp.dest(destFolder));
});

// Create a new build in dist folder
gulp.task('build', gulp.series(
    'clean',
    'build'
));

// Watch for changes.
gulp.task('watch', () => gulp.watch(['./src/*.js'], gulp.series(['build'])));