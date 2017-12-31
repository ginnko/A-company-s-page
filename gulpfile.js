var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var livereload = require('gulp-livereload');

gulp.task('fileinclude', function(){
  gulp.src('./src/*.html')
  .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(gulp.dest('dist'));
});

gulp.task('css', function(){
  gulp.src('./src/css/*.css')
  .pipe(gulp.dest('dist/css'));
});

gulp.task('script', function(){
  gulp.src('./src/js/*.js')
  .pipe(gulp.dest('dist/js'));
});

gulp.task('image', function(){
  gulp.src('./src/img/*.*')
  .pipe(gulp.dest('dist/img'));
});

gulp.task('font', function(){
  gulp.src('./src/fonts/*.*')
  .pipe(gulp.dest('dist/fonts'));
});


gulp.task('watch', function(){
  gulp.watch('./src/css/*.css', ['css']);
  gulp.watch('./src/js/*.js', ['script']);
  gulp.watch('./src/*.html', ['fileinclude']);
  livereload.listen();
  gulp.watch(['./dist/**/*.*']).on('change', livereload.changed);
});

gulp.task('default', ['css', 'script', 'image', 'font', 'fileinclude', 'watch']);