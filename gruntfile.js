module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      test: ['tmp']
    },
    cwebp: {
      static: {
        options: {},
        files: {
          'tmp/static/test-png.webp': 'test/fixtures/test-png.png',
          'tmp/static/test-jpg.webp': 'test/fixtures/test-jpg.jpg'
        }
      },
      dynamic: {
        files: [{
          expand: true,
          cwd: 'test/fixtures', 
          src: ['**/*.{png,jpg}'],
          dest: 'tmp/dynamic'
        }]
      },
      sameExt: {
        options: {
          sameExt: true,
          q: 50
        },
        files: [{
          expand: true,
          cwd: 'test/fixtures', 
          src: ['**/*.{png,jpg}'],
          dest: 'tmp/same'
        }]
      }
    },
    nodeunit: {
      tests: ['test/test.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.loadTasks('tasks');

  grunt.registerTask('mkdir', grunt.file.mkdir);
  grunt.registerTask('test', [
    'clean',
    'mkdir:tmp',
    'cwebp',
    'nodeunit',
    'clean'
  ]);
};