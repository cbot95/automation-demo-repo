import sauceDemo from '../pageObjects/sauceDemo.json'
const { login } = sauceDemo


Cypress.Commands.add('assertVisibility', (dataTest, visibility = 'be.visible') => {
    return cy.getdataTest(dataTest).should(visibility)
})

Cypress.Commands.add('clickDataTest', (dataTest, options = {}) => {
    return cy.get(`[data-test=${dataTest}]`).click(options)

})

Cypress.Commands.add('getdataTest', (dataTest) => {
    return cy.get(`[data-test=${dataTest}]`);
})

// Added the following command to ensure the session gets cleared after each run. 
Cypress.Commands.add('goToPage', (pagePath = '') => {

    cy.window().then((win) => {
        win.sessionStorage.clear();
    });

    // Visit the base URL or the specified page path
    cy.visit(pagePath);
});

Cypress.Commands.add('login', (username, password) => {
    cy.getdataTest(login.usernameField).type(username);
    cy.getdataTest(login.passwordField).type(password);
    cy.clickDataTest(login.button)
})
