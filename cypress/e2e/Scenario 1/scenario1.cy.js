describe('Scenario 1', () => {
    before(() => {
        cy.visit('/angularjs-protractor/webtables/')
    })

    it('Should add a user in the table', () => {
        const firstName = 'Juanito'
        const lastName = 'Arcoiris'
        const userName = 'Juanito1993'
        const password = 'pepito123'
        const role = 'Customer'
        const email = 'juanito23@hotmail.com'
        const cellphone = '1122334455'
        
        cy.addNewUser(firstName, lastName, userName, password, email, cellphone)
        
        cy.searchForUser(firstName)

        cy.assertCreatedUser(firstName, lastName, userName, role, email, cellphone)
    });
})