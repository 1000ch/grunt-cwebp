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
    test.ok(fs.existsSync('tmp/dynamic/test-png.webp'), 'dynamic: should convert PNG images');
    test.done();
  },
  dynamicConvertJPG: test => {
    test.expect(1);
    test.ok(fs.existsSync('tmp/dynamic/test-jpg.webp'), 'dynamic: should convert JPG images');
    test.done();
  },
  sameConvertPNG: test => {
    test.expect(1);
    test.ok(fs.existsSync('tmp/same/test-png.png'), 'sameExt: should convert PNG images');
    test.done();
  },
  sameConvertJPG: test => {
    test.expect(1);
    test.ok(fs.existsSync('tmp/same/test-jpg.jpg'), 'sameExt: should convert JPG images');
    test.done();
  },
  sameConvertPNG: test => {
    test.expect(1);
    test.ok(fs.existsSync('tmp/lossless/test-png.webp'), 'lossless: should convert PNG images');
    test.done();
  },
  sameConvertJPG: test => {
    test.expect(1);
    test.ok(fs.existsSync('tmp/lossless/test-jpg.webp'), 'lossless: should convert JPG images');
    test.done();
  }
};
