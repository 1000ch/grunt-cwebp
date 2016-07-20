'use strict';

const fs = require('fs');

exports.cwebp = {
  convertPNG: test => {
    test.expect(1);
    test.ok(fs.existsSync('tmp/static/test-png.webp'), 'static: should convert PNG images');
    test.done();
  },
  convertJPG: test => {
    test.expect(1);
    test.ok(fs.existsSync('tmp/static/test-jpg.webp'), 'static: should convert JPG images');
    test.done();
  },
  dynamicConvertPNG: test => {
    test.expect(1);
    test.ok(fs.existsSync('tmp/dynamic/test-png.webp'), 'static: should convert PNG images');
    test.done();
  },
  dynamicConvertJPG: test => {
    test.expect(1);
    test.ok(fs.existsSync('tmp/dynamic/test-jpg.webp'), 'static: should convert JPG images');
    test.done();
  },
  sameConvertPNG: test => {
    test.expect(1);
    test.ok(fs.existsSync('tmp/same/test-png.png'), 'static: should convert PNG images');
    test.done();
  },
  sameConvertJPG: test => {
    test.expect(1);
    test.ok(fs.existsSync('tmp/same/test-jpg.jpg'), 'static: should convert JPG images');
    test.done();
  }
};
