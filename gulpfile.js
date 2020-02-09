'use strict';
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
// Static Server + watching scss/html files
gulp.task('serve', ['sass'], () => {
  browserSync.init({
    proxy: 'http://d8-composer.dev'
  });

  gulp
    .watch('assets/scss/**/*.scss', ['sass'])
    .on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers 
gulp.task('sass', () =>
  gulp
  .src('assets/scss/style.scss')
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(gulp.dest('assets/css'))
  .pipe(browserSync.stream())
);

gulp.task('default', ['serve
