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

Cypress.Commands.add('getdataTest', (dataTest) => {
    return cy.get(`[data-test=${dataTest}]`);
})

Cypress.Commands.add('assertVisibility', (dataTest, options = {}) => {
    return cy.getdataTest(dataTest).should(options)
})

Cypress.Commands.add('clickDataTest', (dataTest, options = {}) => {
    return cy.get(`[data-test=${dataTest}]`).click(options)

})