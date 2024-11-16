const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://www.automationpractice.pl/index.php",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
