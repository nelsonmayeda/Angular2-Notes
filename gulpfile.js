const gulp = require('gulp');
const path = require('path');
const Builder = require('systemjs-builder');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('copy', function() {
    return gulp.src('app/**/*.{ttf,woff,woff2,eot,eof,png,svg,css,html}', {base: "app"})
    .pipe(gulp.dest('dist/app'));
});
gulp.task('build', function() {
    var builder = new Builder("./",'./systemjs.config.js');
    return builder.buildStatic('app/main.js', 'dist/app/app.bundle.js',  { minify: false, sourceMaps: true, encodeNames:false})
    .then(function() {
            console.log('Build complete');
        })
        .catch(function(err) {
            console.log('Build error');
            console.log(err);
        });
});
gulp.task('default', ['copy','build']);