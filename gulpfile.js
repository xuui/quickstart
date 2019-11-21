'use strict';
 
var gulp = require('gulp');
var shtml = require('gulp-shtml');

gulp.task('default',['server']);

gulp.task('server',function(){
  browserSync({server:{baseDir:'build'}});
  gulp.watch(['*.html','css/**//*.css','js/**//*.js'],{cwd:'build'},reload);
});

gulp.task('shtml',function(){
  gulp.src('./src/*.shtml', {base: 'src'})
  .pipe(shtml({wwwroot: './src'}))
  .pipe(rename({extname:'.html'}))
  .pipe(gulp.dest('build'));
});
