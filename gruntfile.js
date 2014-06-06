module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      test: ['tmp']
    },
    cwebp: {
      static: {
        options: {},
        files: {
          'tmp/test-png.webp': 'test/fixtures/test.png',
          'tmp/test-jpg.webp': 'test/fixtures/test.jpg'
        }
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