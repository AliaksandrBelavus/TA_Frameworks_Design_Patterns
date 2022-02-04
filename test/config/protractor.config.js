const yargs = require("yargs").argv;

exports.config = {
  restartBrowserBetweenTests: true,

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
};
