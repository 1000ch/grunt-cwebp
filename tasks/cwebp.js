'use strict';

const path = require('path');
const mkdirp = require('mkdirp');
const async = require('async');
const chalk = require('chalk');
const execFile = require('child_process').execFile;
const cwebp = require('cwebp-bin');

module.exports = grunt => {
  grunt.registerMultiTask('cwebp', 'Convert JPG, PNG to WebP with grunt task.', function() {
    const done = this.async();
    const options = this.options({});
    const privateOptions = ['sameExt'];

    async.eachLimit(this.files, 10, (file, next) => {
      const dest = options.sameExt ? file.dest : file.dest.replace(path.extname(file.dest), '.webp');

      // make directory if does not exist
      mkdirp.sync(path.dirname(dest));

      // create default args
      const args = [file.src[0], '-o', dest];

      // add options to args
      Object.keys(options).forEach(key => {
        // If options key is not private for Grunt task, pass in to lib args
        if (privateOptions.indexOf(key) === -1) {
          args.push(`-${key}`);
          args.push(options[key]);
        }
      });

      execFile(cwebp, args, error => {
        if (error) {
          grunt.warn(error);
          next(error);
        } else {
          grunt.log.writeln(chalk.green('✔ ') + file.src[0] + ' was converted to ' + chalk.green(dest));
          next();
        }
      });

    }, error => {
      if (error) {
        grunt.warn(error);
        done(error);
      } else {
        done();
      }
    });
  });
};
