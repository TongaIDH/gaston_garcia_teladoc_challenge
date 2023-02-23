const {
    Given,
    When,
    Then,
} = require("@badeball/cypress-cucumber-preprocessor");

Given(/^I am on the page "([^"]*)"$/, (path) => {
    cy.visit(path)
})

When(/^I delete the user with data "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)" and "([^"]*)"$/, (firstName, lastName, userName, role, email, cellphone) => {
    cy.searchForUser(firstName)
    cy.assertCreatedUser(firstName, lastName, userName, role, email, cellphone)
    cy.cleanSearchInput()
    cy.deleteUserByUsername(userName)
})

Then(/^I should validate the user "([^"]*)" has been successfully deleted$/, (userName) => {
    cy.searchForUser(userName)
    cy.assertUserNotExists(userName)
    cy.cleanSearchInput()
})