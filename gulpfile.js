var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
browserSync = require('browser-sync').create();


gulp.task('default', function(){
  console.log("Hooray - you have done some shit");
});

gulp.task('html', function(){
  console.log("Imagine something useful being done here");
});

gulp.task('styles', function(){
  return  gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssimport, nested, cssvars, autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){

  browserSync.init({
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function(){
  browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function(){
  gulp.start('styles');
  });


});
