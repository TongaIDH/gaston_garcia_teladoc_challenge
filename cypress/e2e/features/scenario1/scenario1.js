const {
    Given,
    When,
    Then,
} = require("@badeball/cypress-cucumber-preprocessor");

Given(/^I am on the page "([^"]*)"$/, (path) => {
    cy.visit(path)
})

When(/^I fill the user data form with "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)" and click on save$/, (firstName, lastName, userName, password, email, cellphone) => {
    cy.addNewUser(firstName, lastName, userName, password, email, cellphone)
})

Then(/I should validate the user has been successfully created with data "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, (firstName, lastName, userName, role, email, cellphone) => {
    cy.searchForUser(firstName)
    cy.assertCreatedUser(firstName, lastName, userName, role, email, cellphone)
    cy.cleanSearchInput()
})