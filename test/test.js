'use strict';

var fs = require('fs');

exports.cwebp = {
  convertPNG: function (test) {
    test.expect(1);
    test.ok(fs.statSync('tmp/test-png.webp').isFile(), 'should convert PNG images');
    test.done();
  },
  convertJPG: function (test) {
    test.expect(1);
    test.ok(fs.statSync('tmp/test-jpg.webp').isFile(), 'should convert JPG images');
    test.done();
  }
};