module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          '_site/css/style.max.css' : ['_site/css/style.scss'],
          '_site/css/sequential.max.css' : ['_site/css/sequential.scss'],
        },
        options: {
          style: 'expanded'
        },
      },
    },
    cssmin: {
      compress: {
        files: {
          '_site/css/style.min.css': '_site/css/style.max.css',
          '_site/css/sequential.min.css': '_site/css/sequential.max.css',
        }
      }
    },
    watch: {
      files: ['_prebuild/**'],
      tasks: ['jekyll','sass','concat'],
    },
    concat: {
       options: {
         separator: ';',
       },
       dist: {
        src: [
          '_site/js/libs/jquery-1.8.2.min.js',
          '_site/js/libs/jquery.backstretch.js',
          '_site/js/libs/jquery.api.twitter.js',
          '_site/js/libs/jquery.api.last.fm.js',
          '_site/js/libs/jquery.api.instagram.js',
          '_site/js/libs/jquery.twitter.js',
          '_site/js/libs/jquery.fittext.js',
          '_site/js/libs/jquery.flexslider.js',
          '_site/js/libs/jquery.prettyForms.js',
          '_site/js/libs/jquery.counter.js',
          '_site/js/libs/jquery.tipTip.js',
          // '_site/js/libs/konami.js',
          '_site/js/libs/jquery.withinViewport.js',
          '_site/js/libs/script.js',
          ],
        dest: '_site/js/script.js',
        nonull: true,
       },
    },
    removelogging: {
      dist: {
        '_site/js/script.js' : ['_site/js/script.js'],
      }
    },
    uglify: {
      my_target: {
        files: {
          '_site/js/script.js' : ['_site/js/script.js'],
          '_site/js/sequential.js' : ['_site/js/sequential.js'],
        }
      }
    },
    jekyll: {
      dist: {
        options: {
          config: '_config.yml'
        }
      }
    },
    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 7,
          progressive: true,
        },
        files: [{
          expand: true,
          src: ['_site/img/**.{png,jpg,gif}'],
          dest: '_site/img/',
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-remove-logging");

  grunt.registerTask('default', ['jekyll','sass','concat']);
  grunt.registerTask('w', ['jekyll','sass','concat','watch']);
  grunt.registerTask('production', ['jekyll','sass','cssmin','concat','imagemin','removelogging','uglify']);
};
