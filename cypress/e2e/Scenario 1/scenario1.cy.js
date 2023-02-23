describe('Scenario 1', () => {
    it('Should add a user in the table', () => {
        //Visiting sandbox page
        cy.visit('https://www.way2automation.com/angularjs-protractor/webtables/')
        
        // Starting the flow to add a new user
        cy.contains('Add User').click()
        
        //Filling the form and creating the user
        cy.get('[name="FirstName"]').type('Juanito')
        cy.get('[name="LastName"]').type('Arcoiris')
        cy.get('[name="UserName"]').type('Juanito1993')
        cy.get('[name="Password"]').type('Arcoiris')
        cy.get('[name="optionsRadios"][value=15]').click()
        cy.get('[name="RoleId"]').select(2)
        cy.get('[name="Email"]').type('juanito23@hotmail.com')
        cy.get('[name="Mobilephone"]').type('1122334455')
        cy.contains('Save').click()
        
        //Asserting the created user in the table
        cy.contains('Juanito')
          .next().should('have.text', 'Arcoiris')
          .next().should('have.text', 'Juanito1993')
          .next().should('have.text', '') // --> This should be taken away somehow
          .next().should('have.text', '') // --> This should be taken away somehow
          .next().should('have.text', 'Customer')
          .next().should('have.text', 'juanito23@hotmail.com')
          .next().should('have.text', '1122334455')
    });
})