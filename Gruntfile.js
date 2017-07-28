module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);


  grunt.initConfig({
    clean: {
      default: ['dist/*']
    },

    concat: {
      dist: {
        src: ['bower_components/jquery/dist/jquery.js', 'src/js/lightbox.js'],
        dest: 'dist/js/lightbox-plus-jquery.js',
      },
    },

    jshint: {
      all: [
        'src/js/lightbox.js',
        'src/js/script.js'
      ],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: [
        'src/js/lightbox.js'
      ],
      options: {
        config: ".jscsrc"
      }
    },

    uglify: {
      start: {
        files: {
          'dist/js/script.min.js': ['dist/js/script.js'],
          'dist/js/sprite.min.js': ['dist/js/sprite.js'],
        }
      }
    },
    
    sass: {
        dist: {
            files: {
                'dist/css/style.css': 'src/sass/style.scss'
            }
        }
    },
    
    stylus: {
      compile: {
        options: {
        },
        files: {
          'dist/css/style.css': ['src/stylus/*.styl'] // compile and concat into single file
        }
      }
    },

    imagemin: {
      build: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ['src/img/*.*']
        }]
      }
    },

    svgstore: {
      options: {
        includeTitleElement: false,
        svg: {
          style: 'display:none',
        },
        cleanup: [
          'fill',
        ],
      },
      default : {
        files: {
          'src/img/sprite.svg': ['src/img/svg/*.svg']
        },
      },
    },

    copy: {
      html: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['*.html'],
            dest: 'dist/'
          }
        ],
      },
      js: {
        files: [
          {
            expand: true,
            cwd: 'src/js/',
            src: ['**'],
            dest: 'dist/js/'
          }
        ],
      },
      css: {
        files: [
          {
            expand: true,
            cwd: 'src/css/',
            src: ['**'],
            dest: 'dist/css/'
          }
        ],
      },
      img: {
        files: [
          {
            expand: true,
            cwd: 'src/img/',
            src: ['**'],
            dest: 'dist/img/'
          }
        ],
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['css/**', 'img/**', 'js/**', 'fonts/**', '*.html'],
            src: '**',
            dest: 'dist/'
          }
        ],
      }
    },

    watch: {
      livereload: {
        options: { livereload: true },
        files: ['dist/**/*'],
      },
      scripts: {
        files: ['src/js/script.js','src/js/lightbox.js', 'src/js/sprite.js' ],
        tasks: ['js'],
        options: {
          spawn: false
        },
      },
      images: {
        files: [
          'src/img/*.*'
        ],
        tasks: ['img'],
        options: {
          spawn: false
        },
      },
      html: {
        files: ['src/*.html'],
        tasks: ['html'],
        options: {
          spawn: false
        },
      },
      // for stylus
      styles:{
        files: ['src/stylus/*.styl', 'src/css/*'],
        tasks: ['css'],
        options: {
          spawn: false
        },
      }
      /* for sass
      styles:{
        files: ['sass/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        },
      },
      */
    },
    
    
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },
    
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            './dist/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./dist/",
          },
          startPath: "index.html",
          ghostMode: {
            clicks: true,
            forms: true,
            scroll: false
          }
        }
      }
    }


  });

  
  grunt.registerTask('default', [
    'clean',
    'stylus',
    //'sass',
    //'jshint',
    'svgstore',
    //'jscs',
    'imagemin',
    'copy:dist',
    //'concat',
    'uglify',
    'cssmin',
    'browserSync',
    'watch'
  ]);

  grunt.registerTask('js', [
    //'jshint', 
    //'jscs', 
    'copy:js', 'uglify'
  ]);

  grunt.registerTask('img', [
    'imagemin',
    'copy:img',
  ]);

   grunt.registerTask('css', [
    'stylus',
    'copy:css',
    'cssmin'
  ]);

   grunt.registerTask('html', [
    'copy:html',
  ]);
};