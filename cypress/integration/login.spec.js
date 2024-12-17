import sauceDemo from '../pageObjects/sauceDemo.json'


describe('Login Page Tests', () => {
    beforeEach(() => {
      cy.visit(sauceDemo.login.url);
    });

        it('displays login page', () => {
            cy.getdataTest(sauceDemo.login.container).should('be.visible');
            cy.getdataTest(sauceDemo.login.username-field).should('be.visible');
            cy.get('[data-test="password"]').should('be.visible');
            cy.get('[data-test="login-button"]').should('be.visible');
        })
        
        it('should redirect to the homepage upon successful login', () => {
            cy.get('[data-test="username"]').type(standardUser);
            cy.get('[data-test="password"]').type(password);
            cy.get('[data-test="login-button"]').click();

        })

  });
  