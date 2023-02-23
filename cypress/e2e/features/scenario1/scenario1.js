const {
    Given,
    When,
    Then,
} = require("@badeball/cypress-cucumber-preprocessor");

Given("I am on the table page", () => {
    cy.visit('/angularjs-protractor/webtables/')
})

When("I fill the user data form and click on save", () => {
    cy.fixture('newUser').then((user) => {
        cy.addNewUser(user.firstName, user.lastName, user.userName, user.password, user.email, user.cellphone)
    })  
})

Then("I should validate the user has been successfully created", () => {
    cy.fixture('newUser').then((user) => {
        cy.searchForUser(user.firstName)
        cy.assertCreatedUser(user.firstName, user.lastName, user.userName, user.role, user.email, user.cellphone)
    })
    cy.cleanSearchInput()
})