import sauceDemo from '../../pageObjects/sauceDemo.json'
const {login, credentials, inventory} = sauceDemo

beforeEach(() => {
    cy.goToPage()
});

describe('Login Page Tests', () => {

        it('displays login page', () => {
            cy.assertVisibility(login.container, 'be.visible')
            cy.assertVisibility(login.usernameField, 'be.visible');
            cy.assertVisibility(login.passwordField, 'be.visible');
            cy.assertVisibility(login.button,'be.visible');
        })
        
        it('should redirect to the homepage upon successful login', () => {
           cy.getdataTest(login.usernameField).type(credentials.standardUser);
            cy.getdataTest(login.passwordField).type(credentials.password);
            cy.clickDataTest(login.button)
            cy.url().should('eq',inventory.url)
        })
        


  });
  