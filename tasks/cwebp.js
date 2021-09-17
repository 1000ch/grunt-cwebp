'use strict';
const path = require('path');
const mkdirp = require('mkdirp');
const replaceExt = require('replace-ext');
const cwebp = require('cwebp-bin');
const execa = require('execa');

const booleanFlags = new Set(['lossless', 'mt', 'low_memory', 'af', 'jpeg_like', 'strong', 'nostrong', 'sharp_yuv']);

module.exports = grunt => {
  grunt.registerMultiTask('cwebp', 'Convert JPG and PNG images to WebP', function () {
    const done = this.async();
    const options = this.options({});

    for (const file of this.files) {
      const src = file.src[0];
      const dest = replaceExt(file.dest, '.webp');

      mkdirp.sync(path.dirname(dest));
      const args = [src, '-o', dest];

      for (const key of Object.keys(options)) {
        args.push(`-${key}`);

        if (!booleanFlags.has(key)) {
          args.push(options[key]);
        }
      }

      try {
        execa.sync(cwebp, args);
        grunt.log.writeln(`✔ ${src} was converted to ${dest}`);
      } catch (error) {
        grunt.warn(error);
      }
    }

    done();
  });
};
