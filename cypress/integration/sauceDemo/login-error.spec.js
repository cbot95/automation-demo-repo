import sauceDemo from '../../pageObjects/sauceDemo.json'
const {login, credentials} = sauceDemo

beforeEach(() => {
    cy.goToPage()
});
// TODO: create function to check if validation UI is visible    
  

describe('Login error Tests', () => {
        it('should display error message when all login fields are incomplete', () => {
            // TODO:  within login container icon should not exist in both field
            cy.assertVisibility(login.errorBanner, 'not.exist');
            cy.clickDataTest(login.button)
            cy.assertVisibility(login.errorBanner);
            // icon should exist in both field
        })
        it('should display error message when password field is incomplete', () => {
            cy.assertVisibility(login.errorBanner, 'not.exist'
            );
            cy.getdataTest(login.usernameField).type(credentials.standardUser);
            cy.clickDataTest(login.button)
            cy.assertVisibility(login.errorBanner);
        })
        it('should display error message when email field is incomplete', () => {
            cy.assertVisibility(login.errorBanner, 'not.exist'
            );
            cy.getdataTest(login.passwordField).type(credentials.password);
            cy.clickDataTest(login.button)
            cy.assertVisibility(login.errorBanner);
        })

  });
  