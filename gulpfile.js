// Initialize modules
  const { src, dest, watch, series, parallel } = require("gulp");
  const autoprefixer  = require("autoprefixer");
  const cssnano       = require("cssnano");
  const concat        = require("gulp-concat");
  const postcss       = require("gulp-postcss");
  const replace       = require("gulp-replace");
  const sass          = require("gulp-sass");
  const sourcemaps    = require("gulp-sourcemaps");
  const uglify        = require("gulp-uglify");
// File path variables
const pathes = {
  scss: 'src/scss/**/*.scss',
  js: 'src/js/**/*.js',
}
// Sass task

// JS task

// Cachebusting task

// Watch task 

// default task