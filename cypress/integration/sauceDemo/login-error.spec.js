import sauceDemo from '../../pageObjects/sauceDemo.json'
const {login, credentials} = sauceDemo

const  assertNoErrorElements = () => {
    cy.assertVisibility(login.errorBanner, 'not.exist');
    cy.get(login.fieldErrorIcon).should('not.exist')
}

beforeEach(() => {
    cy.goToPage()
    assertNoErrorElements()
});


describe('Login error Tests', () => {
    it('should display error message when all login fields are incomplete', () => {
        // TODO:  within login container icon should not exist in both field
        cy.assertVisibility(login.errorBanner, 'not.exist');
        cy.clickDataTest(login.button)
        cy.assertVisibility(login.errorBanner).and('have.text', 'Epic sadface: Username is required');
        cy.get(login.fieldErrorIcon).should('have.length', 2).and('be.visible')
    })
    it('should display error message when password field is incomplete', () => {
        cy.assertVisibility(login.errorBanner, 'not.exist'
        );
        cy.getdataTest(login.usernameField).type(credentials.standardUser);
        cy.clickDataTest(login.button)
        cy.assertVisibility(login.errorBanner).and('have.text', 'Epic sadface: Password is required');
        cy.get(login.formField).eq(1).find(login.fieldErrorIcon).should('be.visible') //asserts icon is visible in the password field
    })
    it('should display error message when email field is incomplete', () => {
        cy.assertVisibility(login.errorBanner, 'not.exist'
        );
        cy.getdataTest(login.passwordField).type(credentials.password);
        cy.clickDataTest(login.button)
        cy.assertVisibility(login.errorBanner).and('have.text', 'Epic sadface: Username is required');
        cy.get(login.formField).eq(0).find(login.fieldErrorIcon).should('be.visible') //asserts icon is visible in the username field
    })

  });

  