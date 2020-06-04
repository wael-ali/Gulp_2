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
    entryHtml: 'index.html'
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
    .pipe(sass())// compile the scss files into css
    .on('error', (err) => console.log(err)) 
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
const cbString = new Date().getTime();
function cacheBustTask() {
  return src([pathes.src.entryHtml]) // get the index.html file
    .pipe(replace(/cb=\d+/g, 'cb=' + cbString)) // replace the cb=123 in the link query so that the browser reload the file.
    .pipe(dest('.'))
  ;
}
// Watch task 
function watchTask() {
  watch(
    [pathes.src.scss, pathes.src.js],// watch the changes on the scss and js files.  
    parallel(scssTask, jsTask) // these task will run simultaneously
  );
}
// default task
// this will run only by typing gthe gulp command in terminal
exports.default = series(
  parallel(scssTask, jsTask),
  cacheBustTask,
  watchTask
);