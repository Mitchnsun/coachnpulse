module.exports = function(grunt) {
  // Load plugins
  grunt.loadNpmTasks('grunt-plato');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-lesslint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Configuration
  grunt.initConfig({
    less : {
      development : {
        options : {
          compress : true,
          yuicompress : true,
          optimization : 2
        },
        files : {
          "work/gallery.css" : "less/gallery.less",
          "work/gallery-grid.css" : "less/gallery-grid.less",
          "work/layout.css" : "less/layout.less",
          "work/style.css" : "less/style.less" // destination file and source file
        }
      }
    },
    concat_css : {
      options : {
        // Task-specific options go here.
      },
      all : {
        src : ["bower_components/pure/pure-min.css", "work/gallery-grid.css", "work/gallery.css", "work/style.css"],
        dest : "dist/style.css"
      },
    },
    uglify : {
      dist : {
        files : {
          'dist/script.min.js' : ['bower_components/jquery/dist/jquery.js',
                                  'js/script.js']
        }
      }
    },
    copy: {
      main: {
        src: 'assets/**',
        dest: 'dist/'
      },
    },
    /* Analysis */
    jshint : {
      all : ['Gruntfile.js', 'js/script.js']
    },
    lesslint : {
      analysis : {
        options : {
          csslint : {
            csslintrc : '.csslintrc'
          }
        },
        src : ['less/*.less']
      }
    },
    plato : {
      analysis : {
        files : {
          'reports' : ['js/*.js']
        },
        options : {
          exclude : /\.min\.js$/
        }
      }
    }
  });

  // Tasks
  grunt.registerTask('default', ['uglify', 'less', 'concat_css', 'copy']);
  grunt.registerTask('analysis', ['plato', 'jshint', 'lesslint']);
};