const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor")
const preprocessor = require("@badeball/cypress-cucumber-preprocessor")

async function setupNodeEvents(on, config) {
  // implement node event listeners here
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                }
              ]
            }
          ]
        }
      }
    })
  )
  return config;
}

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
		configFile: "reporter-config.json"
	},
  viewportWidth: 1920,
	viewportHeight: 1080,
  e2e: {
    //baseUrl: 'https://www.way2automation.com/',
    baseUrl: 'https://pokedexpokemon.netlify.app/',
    experimentalSessionAndOrigin: true,
    setupNodeEvents,
    //specPattern: "**/*.feature",
  },
});
