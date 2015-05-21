module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/extend.js/bin/extend.min.js',
      'app/myclasses.js',
      'app/myclasses_test.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
