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
    css: 'dist/css/main.css',
    js: 'dist/js/main.js',
  }
}
// Sass task
function scssTask() {
  return src(pathes.src.scss) // get all scss files
    .pipe(sourcemaps.init()) // should be run before the sass function
    .pipe(sass()) // compile the scss files into css
    .pipe(postcss([autoprefixer(), cssnano()])) // put prefixes + minify css
    .pipe(sourcemaps.write('.')) // finish maping css and write the map in same directory
    .pipe(dest(pathes.dest.css))
  ;
}

// JS task

// Cachebusting task

// Watch task 

// default task