const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '9q4psy',
  env: {
    viewportWidthBreakpoint: 768,
    grepFilterSpecs: true
  },
  e2e: {
    baseUrl: 'https://notes-serverless-app.com/',
    defaultCommandTimeout: 30000,
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      require('cypress-grep/src/plugin')(config);
      return config;
    },
  },
});
