module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          '_site/css/style.css' : '_prebuild/css/style.scss',
        },
        options: {
          style: 'nested',
          sourceMap: true,
        },
      },
    },


    autoprefixer: {
      options: {
        browsers: ['last 4 versions'],
        cascade: true,
        remove: true,
      },
      dist: {
       files: {
        '_site/css/style.css' : '_site/css/style.css',
       }
      },
    },


    concat: {
       options: {
         separator: ';',
       },
       main: {
        src: [
          '_site/js/libs/analytics.js',
          '_site/js/libs/scrolldepth.js',
          '_site/js/libs/mo.min.js',
          '_site/js/libs/animation-control.js',
          '_site/js/libs/jquery.withinViewport_base.js',
          '_site/js/libs/jquery.withinViewport.js',
          '_site/js/libs/jquery.api.twitter.js',
          '_site/js/libs/jquery.api.last.fm.js',
          '_site/js/libs/jquery.api.instagram.js',
          // '_site/js/libs/photoswipe.min.js',
          // '_site/js/libs/photoswipe-ui-default.min.js',
          // '_site/js/libs/lazyload.js',
          // '_site/js/libs/konami.js',
          // '_site/js/libs/picturefill.js',
          '_site/js/libs/jquery.twitter.js',
          '_site/js/libs/view-mode.js',
          '_site/js/libs/script.js',
          '_site/js/sequential.js',
        ],
        dest: '_site/js/script.js',
        nonull: true,
      },
    },

    removelogging: {
      dist: {
        '_site/js/script.js' : '_site/js/script.js',
      }
    },


    uglify: {
      options: {
        mangle: true,
        beautify: true,
      },
      javascript: {
        files: {
          '_site/js/script.js' : ['_site/js/script.js']
        }
      },
    },


    jekyll: {
      dist: {
        options: {
          config: '_config.yml',
          incremental: true,
        }
      }
    },


    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
        },
        files: {
          // todo - set this to watch all main dirs, not individual files
          '_site/barack-obama-contribute.html': '_site/barack-obama-contribute.html',
          '_site/barack-obama.html': '_site/barack-obama.html',
          '_site/blog-old.html': '_site/blog-old.html',
          '_site/catalyst-iphone-theme.html': '_site/catalyst-iphone-theme.html',
          '_site/hope-will-see-us-through.html': '_site/hope-will-see-us-through.html',
          '_site/index.html': '_site/index.html',
          '_site/livescribe.html': '_site/livescribe.html',
          '_site/manik-rathee-blog.html': '_site/manik-rathee-blog.html',
          '_site/manik-rathee-photography.html': '_site/manik-rathee-photography.html',
          '_site/weeklyreads/index.html': '_site/weeklyreads/index.html',
          '_site/universal-shanti.html': '_site/universal-shanti.html',
          '_site/about/index.html': '_site/about/index.html',
          '_site/resources/index.html': '_site/resources/index.html',
          '_site/wrapskins.html': '_site/wrapskins.html',

        },
      },
    },


    critical: {
      options: {
        base: './',
        css: [
          '_site/css/style.css',
        ],
        width: 320,
        height: 70
      },
      src: '_site/index.html',
      dest: '_site/index.html',

    },


    cssmin: {
      options: {
        report: 'min',
        sourceMap: true,
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          '_site/css/style.css' : '_site/css/style.css',
        }
      }
    },


    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 2,
          progressive: true,
        },
        files: [{
          expand: true,
          src: ['_site/img/**.{png,jpg,gif}'],
          dest: '_site/img/',
        }]
      }
    },


    watch: {
      template: {
        files: '_prebuild/**/*.html',
        tasks: ['jekyll', 'sass', 'concat'],
        options: {
          debounceDelay: 450,
        },
      },
      // main: {
      //   files: '_prebuild/**/*',
      //   tasks: ['jekyll','sass','autoprefixer','concat'],
      //   // tasks: ['sass','autoprefixer','concat'],
      //   options: {
      //     debounceDelay: 550,
      //   },
      // },
      css: {
        files: '_prebuild/css/**/*.scss',
        tasks: ['sass'],
        options: {
          debounceDelay: 450,
        },
      },
      scripts: {
        files: '_prebuild/js/**/*.js',
        tasks: ['concat'],
        options: {
          debounceDelay: 450,
        },
      },
    },

    pagespeed: {
      options: {
        nokey: true,
        url: "http://127.0.0.1:4000/",
        paths: ['about/','blog/'],
        locale: "en_US",
        strategy: ["desktop","mobile"],
        threshold: 85
      },
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks("grunt-remove-logging");
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-critical');
  grunt.loadNpmTasks('grunt-jekyll');
  // grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-pagespeed');

  var critical = require('critical');

  // TODO  fix cirtical css which isnt working right


  grunt.registerTask('default',
    [
      'jekyll','sass','concat'
    ]
  );


  grunt.registerTask('all',
    [
      'jekyll','sass','autoprefixer','concat'
    ]
  );


  grunt.registerTask('minify',
    [
      'sass','concat','uglify:all'
    ]
  );


  grunt.registerTask('w',
    [
      'jekyll','sass','autoprefixer','concat','watch'
    ]
  );

  grunt.registerTask('production',
    [
      'jekyll','sass','autoprefixer','concat','removelogging','uglify','critical','cssmin','htmlmin','imagemin','pagespeed'
    ]
  );
};


