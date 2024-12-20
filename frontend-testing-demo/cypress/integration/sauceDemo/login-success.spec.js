import sauceDemo from '../../pageObjects/sauceDemo.json'
const { login, credentials, inventory } = sauceDemo

beforeEach(() => {
    cy.goToPage()
});

describe('Login Tests', () => {
    it('displays login page', () => {
        cy.assertVisibility(login.container, 'be.visible')
        cy.assertVisibility(login.usernameField, 'be.visible');
        cy.assertVisibility(login.passwordField, 'be.visible');
        cy.assertVisibility(login.button, 'be.visible');
    })

    it('should redirect to the homepage upon successful login', () => {
        cy.login(credentials.standardUser, credentials.password)
        cy.url().should('eq', inventory.url)
    })
});
