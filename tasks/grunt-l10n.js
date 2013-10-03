/*
 * grunt-l10n
 * https://github.com/roychoo/grunt-l10n
 *
 * Copyright (c) 2013 
 * Licensed under the MIT license.
 */
/*global module:false, console:false */

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
      filter: 'isFile',
      ext: '.tpl.html',
      l10nConfig: 'l10n/l10n.js'
    });
    var l10n = grunt.file.readJSON(options.l10nConfig);
    var files = this.files;
    l10n.forEach(function(l){
      files.forEach(function(f){
        var src = f.src.filter(function(filepath){
          if (!grunt.file.exists(filepath)) {
            grunt.log.warn('Source file "' + filepath + '" not found.');
            return false;
          } else {
            return true;
          }
        }).map(function(filepath){
          var filename = filepath.split(options.ext);
          grunt.file.write(f.dest+filename[0]+ '-' + l.language + options.ext, grunt.template.process(grunt.file.read(filepath),{data: l.message}));
          grunt.log.writeln('File "' + f.dest+filename[0]+ '-' + l.language + options.ext + '" created.');
        });
      });
    });
  });
};
