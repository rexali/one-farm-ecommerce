const gulp = require('gulp');
const browserSync = require('browser-sync');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');

function copy() {
  return gulp.src([
    '*.html',
    //'styles/*.css', // processed by processCss
    //'scripts/*.js' // processed by processJs
  ])
  .pipe(gulp.dest('build'));
}
gulp.task('copy', copy);

function copyImage() {
  return gulp.src('images/*.jpg')
  .pipe(gulp.dest('build/images'));
}
gulp.task('copyImage', copyImage);

function serve() {
  return browserSync.init({
    server: '.',
    open: true,
    port: 3000
  });
}
gulp.task(
  'buildAndServe',
  gulp.series(copyImage,copy, processJs, processCss, gulp.parallel(serve, watch))
);


function processJs() {
  return gulp.src('scripts/*.js')
  .pipe(uglify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('build/scripts'));
}
gulp.task('processJs', processJs);

function watch() {
   gulp.watch(['styles/*.css','scripts/*.js','*.html'], gulp.parallel('processCss','processJs') )
      .on('change', browserSync.reload);
}
gulp.task('watch', watch);

function processCss() {
  return gulp.src('styles/*.css')
  .pipe(cleanCss())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('build/styles'));
}
gulp.task('processCss', processCss);

gulp.task('default', gulp.parallel('buildAndServe','watch'), function (done) {

      done();

  });
