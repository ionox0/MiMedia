module.exports = function(grunt){

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({

    copy: {
      prod: {
        expand: true,
        cwd: 'app/assets',
        src: ['foundation/*.css', '*.html', 'images/**/*'],
        dest: 'dist/',
        flatten: false,
        filter: 'isFile'
      },
      dev: {
        expand: true,
        cwd: 'app',
        src: ['styles/foundation/*.css', '*.html', 'assets/images/**/*', 'js/vendor/**/*', 'templates/**/*'],
        dest: 'build/',
        flatten: false,
        filter: 'isFile'
      }
    },
    uglify: {
      js: {
        files: {
          'build/browser.min.js': 'build/browser.js'
        }
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      express: {
        files:  [ 'index.html', 'server.js' ],
        tasks:  [ 'express:dev' ],
        options: {
          spawn: false
        }
      }
    },
    sass: {
      dist: {
        files: {
          'build/styles/main.css': 'app/styles/main.scss'
        }
      },
      dev: {
        options: {
          includePaths: ['app/styles/scss/'],
          sourceComments: 'map'
        },
        files: {
          'build/styles/main.css': 'app/styles/main.scss'
        }
      }
    },
    express: {
      options: {
      },
      dev: {
        options: {
          script: 'server.js',
          node_env: 'development'
        }
      },
      prod: {
        options: {
          script: 'server.js',
          node_env: 'production'
        }
      },
      test: {
        options: {
          script: 'server.js',
          node_env: 'test'
        }
      }
    },
    browserify: {
      prod: {
        src: ['app/**/*.js'],
        dest: 'dist/browser.js',
        options: {
          transform: ['debowerify'],
          debug: false
        }
      },
      dev: {
        src: ['app/**/*.js'],
        dest: 'build/browser.js',
        options: {
          transform: ['debowerify'],
          debug: true
        }
      }
    },
    clean: {
      build: ['build'],
      dev: {
        src: ['build/**/*']
      },
      prod: ['dist']
    }

  })

grunt.registerTask('default',['express:dev', 'watch:express']);
grunt.registerTask('build:dev', ['clean:dev', 'copy:dev', 'browserify:dev', 'uglify']);
grunt.registerTask('build:prod', ['clean:prod', 'sass:prod', 'copy:prod', 'browserify:prod', 'uglify']);

}
