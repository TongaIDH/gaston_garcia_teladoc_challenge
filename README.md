# Teladoc Assignment - Gaston Garcia Alvarez

_Scenarios considered for automation:_
- **Scenario 1:** Add a user and validate the user has been added to the table
- **Scenario 2:** Delete the user "novak" from the table and validate the user has been deleted

# Scripts definition

**Important note:** Please have in mind that **npm i** command should be executed once finished cloning the repo in order to update de different dependencies that were implemented in the project


- **test:ide** - Used to execute the Cypress IDE for creation/maintenance, execution and debugging of the different test suites
- **test:headless** - Used to run the test suites in headless mode (without the browser) over the command line
- **delete:results** - Used to remove previous test results in order to avoid mixing older and newer results
- **report** - Used to run the test suits in headless mode and generate the test results in both JUnit (XML) and Mochawesome (Json) reporters
- **mochawesome:report** - Used to merge all the Mochawesome results into a single Json result and to generate the final HTML report
- **junit:report** - Used to generate all the JUnit results into a single final XML report

# Some other useful information
