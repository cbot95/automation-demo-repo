const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    env: { resetState: true, },
    setupNodeEvents(on, config) {
      console.log('Cypress config loaded');
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/**/*.spec.js',
    testIsolation: true,
  },
  
});
