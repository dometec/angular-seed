module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/extend.js/bin/extend.min.js',
      'app/tiscada-data.json',
      'app/myclasses.js',
      'app/tiscada_app.js',
      'app/myclasses_test.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome', 'Firefox'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    preprocessors: {
      // other stuffs if any
      'app/tiscada_app.js': 'coverage',
      'app/myclasses.js': 'coverage'
    },

    coverageReporter: {
      type : 'html',
      dir : 'test/coverage/'
    },

    // Vedi: http://karma-runner.github.io/0.10/config/configuration-file.html
    reporters: ['progress', 'coverage']

  });
};
