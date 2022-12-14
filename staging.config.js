const { defineConfig } = require("cypress");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin


module.exports = defineConfig({
    defaultCommandTimeout: 5000,
    taskTimeout: 65000,
    pageLoadTimeout: 30000,
    screenshotOnRunFailure:	true,
    video:false,
    chromeWebSecurity: false,
    viewportHeight:	1080,
    viewportWidth: 1920,

    e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: "**/*.feature",
  },
});