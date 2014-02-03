module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: "0.0.0.0",
                    bases: ['build'],
                    livereload: true
                }
            }
        },

        open: {
            all: {
                path: 'http://localhost:<%= express.all.options.port%>'
            }
        },

        clean: {
            all: [
                'build'
            ]
        },

        copy: {
            src: {
                files: [
                    {
                        src: ['**'],
                        dest: 'build/',
                        cwd: 'src',
                        expand: true
                    }
                ]
            },
            vendor: {
                files: [
                    {
                        src: ['bower_components/**/*'],
                        dest: 'build/',
                        cwd: '.',
                        expand: true
                    }
                ]
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },

        watch: {
            all: {
                files: ['src/**/*'],
                tasks: [ 'copy:src' ],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('default', [
        'build',
        'karma'
    ]);

    grunt.registerTask('build', [
        'clean',
        'copy'
    ]);

    grunt.registerTask('server', [
        'build',
        'express',
        'open',
        'watch'
    ]);

    grunt.registerTask('test', [
        'karma:unit'
    ]);

};