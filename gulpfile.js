var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', ['css', 'script', 'image', 'font', 'fileinclude'], function(){
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  gulp.watch('./src/css/*.css', ['css']);
  gulp.watch('./src/js/*.js', ['script']);
  gulp.watch('./src/*.html', ['fileinclude']);
  gulp.watch("./dist").on('change', browserSync.reload);
});

gulp.task('fileinclude', function(){
  gulp.src('./src/*.html')
  .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.stream());
});

gulp.task('css', function(){
  gulp.src('./src/css/*.css')
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.stream());
});

gulp.task('script', function(){
  gulp.src('./src/js/*.js')
  .pipe(gulp.dest('dist/js'))
  .pipe(browserSync.stream());
});

gulp.task('image', function(){
  gulp.src(['./src/img/solution/clients/*.*', './src/img/product/*.*', './src/img/header/*.*', './src/img/footer/*.*', './src/img/index/*.*', './src/img/product/uos-enterprise/*.*', './src/img/product/uos-operator/*.*', './src/img/product/uos-director/*.*', './src/img/product/uos-manager/*.*'])
  .pipe(gulp.dest('dist/img'))
  .pipe(browserSync.stream());
});

gulp.task('font', function(){
  gulp.src('./src/fonts/*.*')
  .pipe(gulp.dest('dist/fonts'))
  .pipe(browserSync.stream());
});



gulp.task('default', ['browser-sync']);