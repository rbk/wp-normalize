module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {                  // Task
            dist: {                   // Target
              options: {              // Target options
                sassDir: 'sass',
                cssDir: 'css',
                environment: 'production',
                outputStyle: 'compressed'
              }
            },
            dev: {                    // Another target
              options: {
                sassDir: 'sass',
                cssDir: 'css',
                environment: 'development',
                outputStyle: 'nested'
              }
            }
        },
        uglify: {
            options: {
             mangle: true,
              compress: {
                drop_console: true
              }
            },
            my_target: {
                options: {
                    beautify: true
                },
                files: {
                    'js/build/production.min.js': ['']
                }
            }
        },
        aws_s3: {

        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['compass']
            },
            js: {
                files: 'js/*.js',
                tasks: ['uglify']
            },
            livereload: {
                files: ['*.html', '**/*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
                options: {
                    livereload: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-aws-s3');
    grunt.loadNpmTasks('grunt-livereload');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', [ 'watch' ]);

};