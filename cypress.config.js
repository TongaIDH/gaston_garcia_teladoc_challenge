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

  config.env.variable = process.env.NODE_ENV ?? "THERE ARE NO VARIABLES"
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
    setupNodeEvents,
    // retries: {
    //   // Configure retries for 'cypress run' -- Default is 0
    //   runMode: 1,
    //   // Configure retries for 'cypress open' -- Default is 0
    //   openMode: 1,
    // },
    env: {
      credentials: {
        user: "username",
        password: "password",
      }
    },
    //specPattern: "**/*.feature",
  },
});
