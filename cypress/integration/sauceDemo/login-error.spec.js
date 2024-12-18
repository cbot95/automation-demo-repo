import sauceDemo from '../../pageObjects/sauceDemo.json'
const {login, credentials} = sauceDemo

beforeEach(() => {
    cy.visit('/')
});
    
  
describe('Login error Tests', () => {
        it('should display error message when all login fields are incomplete', () => {
            cy.assertVisibility(login.errorBanner, 'not.exist'
            );
            cy.clickDataTest(login.button)
            cy.assertVisibility(login.errorBanner, 'be.visible'
            );
        })
        it('should display error message when password field is incomplete', () => {
            cy.assertVisibility(login.errorBanner, 'not.exist'
            );
            cy.getdataTest(login.usernameField).type(credentials.standardUser);
            cy.clickDataTest(login.button)
            cy.assertVisibility(login.errorBanner, 'be.visible'
            );
        })

  });
  