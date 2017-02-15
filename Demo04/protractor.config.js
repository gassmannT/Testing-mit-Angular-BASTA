exports.config = {
    directConnect: true,

    allScriptsTimeout: 11000,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'jasmine',

    // Spec patterns are relative to this config file
    specs: ['**/*e2e-spec.js'],

    baseUrl: 'http://localhost:8000/',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }

};