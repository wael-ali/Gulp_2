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
  src: {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
  },
  dest: {
    css: 'dist/css',
    js: 'dist/js',
  }
}
// Sass task
function scssTask() {
  return src(pathes.src.scss) // get all scss files
    .pipe(sourcemaps.init()) // should be run before the sass function
    .pipe(sass()) // compile the scss files into css
    .pipe(postcss([autoprefixer(), cssnano()])) // put prefixes + minify css
    .pipe(sourcemaps.write('.')) // finish maping css and write the map in same directory
    .pipe(dest(pathes.dest.css)) // save it in the destination
  ;
}

// JS task
function jsTask() {
  return src(pathes.src.js) // get all js files
    .pipe(concat('main.js')) // put them in one file
    .pipe(uglify()) // minify/uglify the js file
    .pipe(dest(pathes.dest.js)) // save it in the destination

  ;
}
// Cachebusting task

// Watch task 

// default task