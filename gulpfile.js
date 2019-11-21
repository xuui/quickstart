const { src, dest, parallel, watch } = require('gulp'); //series,
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const less = require('gulp-less');
const shtml = require('gulp-shtml');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');

function html(){
  return src('src/*.shtml',{base: 'src'})
    .pipe(shtml({wwwroot: './src'}))
    .pipe(rename({extname:'.html'}))
    .pipe(dest('build'))
}

function cssless() {
  return src('src/less/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest('build/css'))
}

function css(){
  return src('src/styles/*.css')
    .pipe(concat('style.min.css'))
    .pipe(minifyCSS())
    .pipe(dest('build/css'))
}

function js(){
  return src('src/scripts/*.js', { sourcemaps: true })
    .pipe(concat('script.min.js'))
    .pipe(dest('build/js', { sourcemaps: true }))
}

function server() {
  browserSync({server:{baseDir:'build'}});
  //return watch(['*.html','css/**//*.css','js/**//*.js'],{cwd:'build'},reload);
  return watch(['*.html','css/**//*.css','js/**//*.js'],{events:'change'},function(cb) {
  });
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.cssless = cssless;
exports.server = server;
exports.default = parallel(html, css, js);











/*
exports.default = function() {
  return src('src/script/*.js')
    .pipe(babel())
    //.pipe(src('vendor/*.js'))
    .pipe(dest('build/'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('build/'));
}
/*
const { series } = require('gulp');

function build(cb) {
  // body omitted
  cb();
}
exports.default = series(build);
/*
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
*/