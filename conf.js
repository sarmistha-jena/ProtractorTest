var HTMLReport = require('protractor-html-reporter-2');
var jasmineReporters = require('jasmine-reporters');

require('jasmine2-protractor-utils');

exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  directConnect: true,
  capabilities: {

    'browserName': 'chrome',


  },
  specs: ['DemoSpec.js'],

  plugins: [{
    package: 'jasmine2-protractor-utils',
    disableHTMLReport: true,
    disableScreenshot: false,
    screenshotPath:'./screenshots',
    screenshotOnExpectFailure:false,
    screenshotOnSpecFailure:true,
    clearFoldersBeforeTest: true
  }],

  onPrepare: function () {

    browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();

    //
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './',
      filePrefix: 'xmlresults'
    }));
  },

  onComplete: function () {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');
      platform = caps.get('platform');

      var HTMLReport = require('protractor-html-reporter-2');

      testConfig = {
        reportTitle: 'Protractor Test Execution Report',
        outputPath: './',
        outputFilename: 'ProtractorTestReport',
        screenshotPath: './screenshots',
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
        testPlatform: platform
      };
      new HTMLReport().from('xmlresults.xml', testConfig);
    });
  }

}