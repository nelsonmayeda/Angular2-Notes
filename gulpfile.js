const gulp = require('gulp');
const path = require('path');
const Builder = require('systemjs-builder');

gulp.task('default', function(cb) {
    var builder = new Builder("./",'./systemjs.config.js');
    builder.buildStatic('app/main.js', 'dist/app.bundle.js');
});