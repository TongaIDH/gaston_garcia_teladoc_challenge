# Teladoc Assignment - Gaston Garcia Alvarez

_Scenarios considered for automation:_
- **Scenario 1:** Add a user and validate the user has been added to the table
- **Scenario 2:** Delete the user "novak" from the table and validate the user has been deleted

# Scripts definition

**Important note:** Please have in mind that **npm i** command should be executed once finished cloning the repo in order to update the different dependencies that were implemented in the project

- **test:ide** - Used to execute the Cypress IDE for creation/maintenance, execution and debugging of the different test suites
- **test:headless:chrome** - Used to run the test suites in headless mode (without the browser) over the command line
- **delete:results** - Used to remove previous test results in order to avoid mixing older and newer results
- **report:chrome** - Used to run the test suits in headless mode and generate the test results in both JUnit (XML) and Mochawesome (Json) reporters
- **mochawesome:report** - Used to merge all the Mochawesome results into a single Json result and to generate the final HTML report
- **junit:report** - Used to generate all the JUnit results into a single final XML report

# Plugins/Libraries implemented
- **JUnit Reporter** - For XML reports, could be used to publish test result inside Test Management Tools
- **Mochawesome Reporter** - For HTML reports, could be used mainly to inform test results to managers
- **Webpack** - To translate Cucumber features into code that can be executed by Cypress
- **Cucumber** - For Gherkin syntax in Cucumber features, it creates a bridge between the technical gap that exists among Devs/QAs and management

# Custom Commands Implemented
**On file:** support/commands.js

- **addNewUser** - Gathers all the selectors for the form inputs and save button, completes the values and confirms the creation of the user
- **deleteUserByUsername** - Gathers the selectors for table data and button to confirm deletion, looks for the username and deletes it
- **searchForUser** - It has the selector for search input and types the username
- **cleanSearchInput** - It has the selector for search input and cleans it
- **assertCreatedUser** - Gathers the selectors for table data, looks for the created values and asserts them
- **assertUserNotExists** - It has the selector for table and looks in the table data to assert the user doesn't exist