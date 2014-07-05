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
    var ownOptions = [
        'ext'
    ];

    async.eachLimit(this.files, 10, function (file, next) {
      var dest = file.dest;

      if (options.ext) {
        dest = dest.replace(path.extname(dest), options.ext);
      }

      // make directory if does not exist
      mkdirp.sync(path.dirname(dest));

      // create default args
      var args = [file.src[0], '-o', dest];

      // add options to args
      Object.keys(options).forEach(function (key) {
        if (ownOptions.indexOf(key) === -1) {
          args.push('-' + key);
          args.push(options[key]);
        }
      });
      
      execFile(cwebp, args, function (error) {
        if (error) {
          grunt.warn(error);
          return next(error);
        } else {
          grunt.log.writeln(
            chalk.green('✔ ') + file.src[0] + ' was converted to ' + chalk.green(dest)
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
