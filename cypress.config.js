const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9q4psy',
  env: {
    viewportWidthBreakpoint: 768
  },
  e2e: {
    baseUrl: 'https://notes-serverless-app.com/',
    defaultCommandTimeout: 30000,
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
