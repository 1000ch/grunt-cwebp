'use strict';

var path = require('path');
var mkdirp = require('mkdirp');
var async = require('async');
var chalk = require('chalk');
var execFile = require('child_process').execFile;
var cwebp = require('cwebp-bin').path;

module.exports = function (grunt) {

  grunt.registerMultiTask('cwebp', 'Convert JPG, PNG to WebP with grunt task.', function() {
    var done = this.async();
    var options = this.options({});

    async.eachLimit(this.files, 10, function (file, next) {

      // make directory if does not exist
      mkdirp.sync(path.dirname(file.dest));

      // create default args
      var args = [file.src[0], '-o', file.dest];

      // add options to args
      Object.keys(options).forEach(function (key) {
        args.push('-' + key);
        args.push(options[key]);
      });
      
      execFile(cwebp, args, function (error) {
        if (error) {
          grunt.warn(error);
          return next(error);
        } else {
          grunt.log.writeln(
            chalk.green('✔ ') + file.src[0] + ' was converted to ' + chalk.green(file.dest)
          );
        }
        next();
      });

    }, function (error) {
      if (error) {
        grunt.warn(error);
        return done(error);
      }
      done();
    });
  });
};