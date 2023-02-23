describe('Scenario 2', () => {
    it('Should delete a user of the table', () => {
        //Visiting sandbox page
        cy.visit('/angularjs-protractor/webtables/')
            
        // Asserting that the user novak really exists
        cy.get('[table-title="Smart Table example"]')
            .find('tr')
            .eq(5)
            .find('td')
            .eq(2)
            .should('have.text', 'novak')

        // Deleting the user novak
        cy.get('[table-title="Smart Table example"]')
            .find('tr')
            .eq(5)
            .find('td')
            .eq(10)
            .children()
            .click()
        cy.get('.btn-primary')
            .click()

        // Asserting that the User Name novak doesn't exists anymore
        cy.get('input[placeholder="Search"]')
            .type('novak')
        cy.get('[table-title="Smart Table example"]')
            .find('td')
            .each(($el) => {
                const data = $el.text()
                expect(data).to.not.equal('novak')
            })
    });
})