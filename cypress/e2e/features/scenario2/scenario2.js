const {
    Given,
    When,
    And,
    Then,
} = require("@badeball/cypress-cucumber-preprocessor");

Given("I am on the table page", () => {
    cy.visit('/angularjs-protractor/webtables/')
})

When("I delete the user", () => {
    cy.fixture('existingUser').then((user) => {
        cy.searchForUser(user.firstName)
        cy.assertCreatedUser(user.firstName, user.lastName, user.userName, user.role, user.email, user.cellphone)
    })
    cy.cleanSearchInput()
    cy.fixture('existingUser').then((user) => {
        cy.deleteUserByUsername(user.userName)
    })
})

Then("I should validate the user has been successfully deleted", () => {
    cy.fixture('existingUser').then((user) => {
        cy.searchForUser(user.userName)
        cy.assertUserNotExists(user.userName)
    })
    cy.cleanSearchInput()
})