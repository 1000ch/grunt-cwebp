# grunt-cwebp

Convert JPG and PNG images to WebP with grunt task.

[![Build Status](https://travis-ci.org/1000ch/grunt-cwebp.svg?branch=master)](https://travis-ci.org/1000ch/grunt-cwebp)
[![NPM version](https://badge.fury.io/js/grunt-cwebp.svg)](http://badge.fury.io/js/grunt-cwebp)
[![Dependency Status](https://david-dm.org/1000ch/grunt-cwebp.svg)](https://david-dm.org/1000ch/grunt-cwebp)
[![devDependency Status](https://david-dm.org/1000ch/grunt-cwebp/dev-status.svg)](https://david-dm.org/1000ch/grunt-cwebp#info=devDependencies)

## Install

```sh
$ npm install --save-dev grunt-cwebp
```

## Usage

Please see following `gruntfile.js` example.

```js
module.exports = function (grunt) {
  grunt.initConfig({
    cwebp: {
      static: {
        files: {
          'dist/img-png.webp': 'src/img.png',
          'dist/img-jpg.webp': 'src/img.jpg',
          'dist/img-gif.webp': 'src/img.gif'
        }
      },
      dynamic: {
        options: {
          q: 50
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-cwebp');
};
```

You can also pass the options like `q: 50`.

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
