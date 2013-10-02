/*
 * grunt-l10n
 * https://github.com/roychoo/grunt-l10n
 *
 * Copyright (c) 2013 
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('l10n', 'l10n', function() {
    var conf = grunt.config('l10n');
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', ',
      filter: 'isFile'
    });
    var l10n = grunt.file.readJSON(options.l10nConfig);
    var files = this.files;
    l10n.forEach(function(l){
      files.forEach(function(f){
        var src = f.src.filter(function(filepath){
        }).map(function(filepath){
          grunt.file.write('test.tpl.html', grunt.template.process(grunt.file.read(filepath),{data: l.message}));
        });
      });
    });
    this.files.forEach(function(f) {
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        /*if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }*/
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Handle options.
      src += options.punctuation;

      // Write the destination file.
      //grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
