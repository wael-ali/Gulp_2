Gulp 
- Make sure that you have node.js installed.
- install Gulp globlay: npm install -g gulp.
- initialize project: npm init or npm init -y to answer with yes on all questions
  this will create package.json.
- installing packages needed as development depenecies: 
    gulp.
    gulp-sass: compile sass files into css files.
    gulp-sourcemaps: mapes your styles to the origin scss file, easier to find.
    gulp-postcss:
    autoprefixer:
    cssnano:
    gulp-concat: concat and combine your js files into one.
    gulp-uglify: minifying js files.
    gulp-replace: to help replace some query for cache busting.

    "npm install --save-dev gulp gulp-sass gulp-sourcemaps gulp-postcss autoprefixer cssnano gulp-concat gulp-replace gulp-uglify"