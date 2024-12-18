import sauceDemo from '../../pageObjects/sauceDemo.json'
const {login, credentials} = sauceDemo

describe('Login error Tests', () => {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.clearCookies(); 
        cy.visit(sauceDemo.login.url);
    });
        
        it('should display error message when login fields are incomplete', () => {
            cy.assertVisibility(login.errorBanner, 'not.exist'
            );
            cy.getdataTest(login.usernameField).type(credentials.standardUser);
            cy.clickDataTest(login.button)
            cy.assertVisibility(login.errorBanner, 'be.visible'
            );
        })

  });
  