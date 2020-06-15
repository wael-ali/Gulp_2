# Gulp 

## Using this repo:
- Open your terminal and make sure that you have node.js and gulp installed.
- pull this project and go to its directory.
- in terminal: 
  > npm install
  > gulp
- its your alls to change in its src files.

## Createing this project:

- Open your terminal and make sure that you have node.js installed.
- install Gulp globlay: 
  > npm install -g gulp.
- make an empty folder: 
  > mkdir project_name
- go to project folder
- initialize project: 
  > npm init 
  or 
  > npm init -y // to answer with yes on all questions
  this will create package.json.
- installing packages needed as development depenecies: 
    - gulp.
    - gulp-sass: compile sass files into css files.
    - gulp-sourcemaps: mapes your styles to the origin scss file, easier to find.
    - gulp-postcss:
    - autoprefixer:
    - cssnano:
    - gulp-concat: concat and combine your js files into one.
    - gulp-uglify: minifying js files.
    - gulp-replace: to help replace some query for cache busting.

> npm install --save-dev gulp gulp-sass gulp-sourcemaps gulp-postcss autoprefixer cssnano gulp-concat gulp-replace gulp-uglify.
- in project root create gulpfile.js: touch gulpfile.js
- copy the gulpfile.js
