var fs = require('fs');
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('dev', ['watch:css', 'watch:js', 'dev:server'])

gulp.task('dev:server', function() {
    nodemon({
        script:'bin/www',
        ext:'js',
        ignore:['ng*', 'gulp*', 'assets*']
    })
})


fs.readdirSync(__dirname+'/gulp').forEach(function(task) {
    require('./gulp/' + task)
})