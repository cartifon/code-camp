'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            html: {
                files: ['./src/views/*.html']
            },
            scripts: {
                files: ['./src/scripts/*.js']
            },
            // styles: {
            //     files: ['./src/styles/*.scss'],
            //     tasks: [
            //         'sasslint',
            //         'sass:server',
            //         'autoprefixer:server'
            //     ]
            // }
        },
        browserSync: {
            server: {
                options: {
                    background: true,
                    files: [
                        './src/scripts/*.js',
                        './src/views/*.html',
                        './src/*.html',
                        './src/styles/*.css'
                    ],
                    server: {
                        baseDir: [
                            './src',
                        ],
                        routes: {
                            '/node_modules': './node_modules'
                        }
                    }
                }
            }
        },
    });

    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-serve');

    // the default task can be run just by typing "grunt" on the command line
    grunt.registerTask('default', ['browserSync', 'watch']);
};
