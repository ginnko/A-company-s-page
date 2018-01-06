var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var livereload = require('gulp-livereload');

gulp.task('fileinclude', function(){
  gulp.src('./src/*.html')
  .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(gulp.dest('dist'))
  .pipe(livereload());
});

gulp.task('css', function(){
  gulp.src('./src/css/*.css')
  .pipe(gulp.dest('dist/css'))
  .pipe(livereload());
});

gulp.task('script', function(){
  gulp.src('./src/js/*.js')
  .pipe(gulp.dest('dist/js'))
  .pipe(livereload());
});

gulp.task('image', function(){
  gulp.src(['./src/img/header/*.*', './src/img/footer/*.*', './src/img/index/*.*', './src/img/product/uos-enterprise/*.*', './src/img/product/uos-operator/*.*', './src/img/product/uos-director/*.*', './src/img/product/uos-manager/*.*'])
  .pipe(gulp.dest('dist/img'))
  .pipe(livereload());
});

gulp.task('font', function(){
  gulp.src('./src/fonts/*.*')
  .pipe(gulp.dest('dist/fonts'))
  .pipe(livereload());
});


gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('./src/css/*.css', ['css']);
  gulp.watch('./src/js/*.js', ['script']);
  gulp.watch('./src/*.html', ['fileinclude']);
  gulp.watch(['./dist/**/*.*']).on('change', livereload.changed);
});

gulp.task('default', ['css', 'script', 'image', 'font', 'fileinclude', 'watch']);