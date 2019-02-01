var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');



gulp.task('styles', function(){
   return  gulp.src(['scss/**/*.scss'])
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('css/'))
        .pipe(livereload());
});


gulp.task('default', function(){
   livereload.listen();
    gulp.watch("scss/**/*.scss", gulp.series('styles'));
});
