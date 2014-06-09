'use strict';

var fs = require('fs');

exports.cwebp = {
  convertPNG: function (test) {
    test.expect(1);
    test.ok(fs.existsSync('tmp/test-png.webp'), 'should convert PNG images');
    test.done();
  },
  convertJPG: function (test) {
    test.expect(1);
    test.ok(fs.existsSync('tmp/test-jpg.webp'), 'should convert JPG images');
    test.done();
  }
};