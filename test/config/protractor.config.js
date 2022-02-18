const SpecReporter = require("jasmine-spec-reporter").SpecReporter;
const yargs = require("yargs").argv;

exports.config = {

  directConnect: true,

  multiCapabilities: {
    'browserName': 'chrome',
    shardTestFiles: yargs.instances > 1,
    maxInstances: yargs.instances || 1,
  },

  maxSessions: 2,

  framework: "jasmine",

  specs: ["../specs/*.js"],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },

  onPrepare: function () {
    jasmine.getEnv().addReporter(
      new SpecReporter({
        suite: {
          displayNumber: true,
        },
        spec: {
          displayPending: true,
          displayDuration: true,
        },
        summary: {
          displaySuccesses: false,
          displayFailed: false,
          displayPending: false,
        },
      })
    );
  },
};
