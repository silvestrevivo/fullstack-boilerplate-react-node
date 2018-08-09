let gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('swagger-concat', function(done) {
    gulp.src([
        './server/api/swagger/_header.yaml',
        './server/api/swagger/_paths.yaml',
        './server/api/swagger/definitions.yaml'
    ])
    .pipe(concat('swagger.yaml'))
    .pipe(gulp.dest('./server/api/swagger'))
    .on('end', done);
});

gulp.task('default', ['swagger-concat'], function() {

});