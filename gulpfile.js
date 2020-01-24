/*
Gulp 4
NPM Setup:
npm i gulp --global
npm i -D gulp
npm i -D gulp-nunjucks
*/

/*
This is for Eleventy Guide Nunjucks build.
*/

/* TODO: test this */

const { src, dest, series, parallel, watch } = require('gulp');
const nunjucks = require('gulp-nunjucks');

/* Functions */

const nunjucksbuild = () => {
  return src('./src/*.html')
    .pipe(nunjucks.compile())
    .pipe(dest('./dist'));
};

const css = () => {
  return src('./src/css/*.css').pipe(dest('./dist/css'));
};

const fonts = () => {
  return src('./src/fonts/*.*').pipe(dest('./dist/fonts'));
};

const pagescopy = () => {
  return src('./dist/**/*.*').pipe(dest('../../githubpages-02/public/eleventy-walkthrough'));
};

exports.render = series(nunjucksbuild, css, fonts);
exports.copy = series(pagescopy);
