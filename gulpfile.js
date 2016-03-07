'use strict';

var gulp = require('gulp'),
//    debug = require('gulp-debug'),
//    inject = require('gulp-inject'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    jasmine = require('gulp-jasmine'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    Config = require('./gulpfile.config'),
    tsProject = tsc.createProject('tsconfig.json'),
    tsProjectTest = tsc.createProject('tsconfig-test.json');
//    browserSync = require('browser-sync'),
//    superstatic = require( 'superstatic' );

var config = new Config();

gulp.task('ts-lint', function () {
    return gulp.src(config.mainSrc)
      .pipe(tslint())
      .pipe(tslint.report('prose'));
});

gulp.task('compile-main', function () {
    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

        tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
        return tsResult.js
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(config.tsOutputPath));
});


// ===== TESTS =====

gulp.task('compile-tests', function() {
    return tsProjectTest.src()
        .pipe(tsc(tsProjectTest))
        .pipe(gulp.dest(config.testOutputFile));
});

gulp.task('run-tests', ['compile-tests'], function() {
  gulp.src(config.testSrc)
    .pipe(jasmine());
});


/**
 * Remove all generated JavaScript files from TypeScript compilation.
 */
gulp.task('clean', function (cb) {
    var typeScriptGenFiles = [
        config.tsOutputPath +'/**/*.d.ts',
        config.tsOutputPath +'/**/*.js',
        config.tsOutputPath +'/**/*.js.map'
    ];

    // delete the files
    del(typeScriptGenFiles, cb);
});

gulp.task('watch', function() {
    gulp.watch([config.mainSrc, config.mainSrc], ['ts-lint', 'compile-main', 'run-tests']);
});

gulp.task('default', ['ts-lint', 'compile-main', 'run-tests']);
