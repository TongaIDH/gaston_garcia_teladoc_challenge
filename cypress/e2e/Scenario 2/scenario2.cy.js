describe('Scenario 2', () => {
    before(() => {
        cy.visit('/angularjs-protractor/webtables/')
    })

    it('Should delete a user of the table', () => {
        const firstName = 'Mark'
        const lastName = 'Novak'
        const userName = 'novak'
        const role = 'Customer'
        const email = 'asa@asd.cz'
        const cellphone = '777888444'

        cy.searchForUser(firstName)

        cy.assertCreatedUser(firstName, lastName, userName, role, email, cellphone)

        cy.cleanSearchInput()

        cy.deleteUserByUsername(userName)

        cy.searchForUser(userName)

        cy.assertUserNotExists(userName)

        cy.cleanSearchInput()
    });
})