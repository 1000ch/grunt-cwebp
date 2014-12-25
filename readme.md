# [grunt-cwebp](https://www.npmjs.org/package/grunt-cwebp)

## About

Convert JPG and PNG images to WebP with grunt task.

[![Build Status](https://travis-ci.org/1000ch/grunt-cwebp.svg?branch=master)](https://travis-ci.org/1000ch/grunt-cwebp)
[![NPM version](https://badge.fury.io/js/grunt-cwebp.svg)](http://badge.fury.io/js/grunt-cwebp)
[![Dependency Status](https://david-dm.org/1000ch/grunt-cwebp.svg)](https://david-dm.org/1000ch/grunt-cwebp)
[![devDependency Status](https://david-dm.org/1000ch/grunt-cwebp/dev-status.svg)](https://david-dm.org/1000ch/grunt-cwebp#info=devDependencies)

## Install

This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```sh
$ npm install --save-dev grunt-cwebp
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cwebp');
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

Files are processed with [node-cwebp-bin](https://github.com/1000ch/node-cwebp-bin), you can also pass any native lib options, like `q`.

## Options

### sameExt

Type: `Boolean`
Default: `false`

Set to `true`, if you want to leave original file extension after converting to webp.

## License

MIT: http://1000ch.mit-license.org
