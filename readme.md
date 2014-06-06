# [grunt-cwebp](https://www.npmjs.org/package/grunt-cwebp)

## About

Convert your JPG and PNG images to WebP.

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

## License

MIT