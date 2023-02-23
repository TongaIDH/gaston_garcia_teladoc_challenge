describe('Scenario 1', () => {
    before(() => {
        cy.visit('/angularjs-protractor/webtables/')
    })

    it('Should add a user in the table', () => {
        cy.fixture('newUser').then((user) => {
            cy.addNewUser(user.firstName, user.lastName, user.userName, user.password, user.email, user.cellphone)
            cy.searchForUser(user.firstName)
            cy.assertCreatedUser(user.firstName, user.lastName, user.userName, user.role, user.email, user.cellphone)
        })    
        cy.cleanSearchInput()
    });
})