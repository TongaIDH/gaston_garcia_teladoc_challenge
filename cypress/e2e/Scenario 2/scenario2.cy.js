describe('Scenario 2', () => {
    before(() => {
        cy.visit('/angularjs-protractor/webtables/')
    })

    it('Should delete a user of the table', () => {
        cy.fixture('existingUser').then((user) => {
            cy.searchForUser(user.firstName)
            cy.assertCreatedUser(user.firstName, user.lastName, user.userName, user.role, user.email, user.cellphone)
        })
        cy.cleanSearchInput()
        cy.fixture('existingUser').then((user) => {
            cy.deleteUserByUsername(user.userName)
            cy.searchForUser(user.userName)
            cy.assertUserNotExists(user.userName)
        })
        cy.cleanSearchInput()
    });
})