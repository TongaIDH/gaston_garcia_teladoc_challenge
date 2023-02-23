// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addNewUser', (firstName, lastName, userName, password, email, cellphone) => {
    const addUserButton = 'button[type="add"]'
    const firstNameInput = '[name="FirstName"]'
    const lastNameInput = '[name="LastName"]'
    const userNameInput = '[name="UserName"]'
    const passwordInput = '[name="Password"]'
    const radioButton2 = '[name="optionsRadios"][value=15]'
    const roleIdDropdown = '[name="RoleId"]'
    const emailInput = '[name="Email"]'
    const cellphoneInput = '[name="Mobilephone"]'
    const saveButton = '.btn.btn-success'

    cy.get(addUserButton).should('be.visible').click()
    cy.get(firstNameInput).should('be.visible').type(firstName)
    cy.get(lastNameInput).should('be.visible').type(lastName)
    cy.get(userNameInput).should('be.visible').type(userName)
    cy.get(passwordInput).should('be.visible').type(password)
    cy.get(radioButton2).should('be.visible').click()
    cy.get(roleIdDropdown).should('be.visible').select(2)
    cy.get(emailInput).should('be.visible').type(email)
    cy.get(cellphoneInput).should('be.visible').type(cellphone)
    cy.get(saveButton).should('be.enabled').click()
})

Cypress.Commands.add('deleteUserByUsername', (userName) => {
    const confirmDeleteButton = '.btn-primary'
    const el = 'td'

    cy.contains(userName)
        .parent()
        .find(el)
        .eq(10)
        .children().should('be.visible').click()
    
    cy.get(confirmDeleteButton).should('be.visible').click()
})

Cypress.Commands.add('searchForUser', (firstName) => {
    const searchInput = 'input[placeholder="Search"]'
    cy.get(searchInput).should('be.visible').type(firstName)
})

Cypress.Commands.add('cleanSearchInput', () => {
    const searchInput = 'input[placeholder="Search"]'
    cy.get(searchInput).should('be.visible').clear()
})

Cypress.Commands.add('assertCreatedUser', (firstName, lastName, userName, role, email, cellphone) => {
    const firstNameCell = '.smart-table-data-row > :nth-child(1)'
    const lastNameCell = '.smart-table-data-row > :nth-child(2)'
    const userNameCell = '.smart-table-data-row > :nth-child(3)'
    const roleIdCell = '.smart-table-data-row > :nth-child(6)'
    const emailCell = '.smart-table-data-row > :nth-child(7)'
    const cellphoneCell = '.smart-table-data-row > :nth-child(8)'

    cy.get(firstNameCell).should('be.visible').and('have.text', firstName)
    cy.get(lastNameCell).should('be.visible').and('have.text', lastName)
    cy.get(userNameCell).should('be.visible').and('have.text', userName)
    cy.get(roleIdCell).should('be.visible').and('have.text', role)
    cy.get(emailCell).should('be.visible').and('have.text', email)
    cy.get(cellphoneCell).should('be.visible').and('have.text', cellphone)
})

Cypress.Commands.add('assertUserNotExists', (userName) => {
    const usersTable = '[table-title="Smart Table example"]'

    cy.get(usersTable)
        .find('td')
        .each(($el) => {
            const data = $el.text()
            expect(data).to.not.equal(userName)
        })
})

