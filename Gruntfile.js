/*
 * grunt-cli
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tyler Kellen, contributors
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt-init/blob/master/LICENSE-MIT
 */
 
'use strict';
 
module.exports = function(grunt) {
 
    grunt.initConfig({
        concat: {
            css: {
                src: [
                      'src/css/bootstrap.css', 
                      'src/css/styles.css'
                     ],
                dest: 'assets/css/main.css'
              },
 
            js: {
                src: [
                      'src/js/jquery.js', 
                      'src/js/bootstrap.js', 
                      'src/js/app.js'
                     ],
                dest: 'assets/js/main.js'
              }
            },
        uglify: {
            js: {
                src: [
                      'src/js/jquery.js', 
                      'src/js/bootstrap.js', 
                      'src/js/app.js'
                     ],
                dest: 'assets/js/main.min.js'
                }
            },
        cssmin: {
            css: {
                src: [
                      'src/css/bootstrap.css', 
                      'src/css/styles.css'
                     ],
                dest: 'assets/css/main.min.css'
                }
            }
        });
 
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('build', ['concat', 'uglify', 'cssmin']);
};
