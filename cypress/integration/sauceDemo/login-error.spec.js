import sauceDemo from '../../pageObjects/sauceDemo.json'
const { login, credentials } = sauceDemo

const assertNoErrorElements = () => {
    cy.assertVisibility(login.errorBanner, 'not.exist');
    cy.get(login.fieldErrorIcon).should('not.exist')
}

const errorIconsVisible = () => {
    cy.get(login.fieldErrorIcon).should('have.length', 2).and('be.visible')
}

beforeEach(() => {
    cy.goToPage()
    assertNoErrorElements()
});


describe('Tests login forms when fields are incomplete', () => {
    it('should display error message when all login fields are incomplete', () => {
        cy.clickDataTest(login.button)
        cy.assertVisibility(login.errorBanner).and('have.text', 'Epic sadface: Username is required');
        errorIconsVisible()
    })
    it('should display error message when password field is incomplete', () => {
        cy.getdataTest(login.usernameField).type(credentials.standardUser);
        cy.clickDataTest(login.button)
        errorIconsVisible()
        cy.assertVisibility(login.errorBanner).and('have.text', 'Epic sadface: Password is required');
    })
    it('should display error message when email field is incomplete', () => {
        cy.getdataTest(login.passwordField).type(credentials.password);
        cy.clickDataTest(login.button)
        cy.assertVisibility(login.errorBanner).and('have.text', 'Epic sadface: Username is required');
        errorIconsVisible()
    })

});

describe('Tests login form when user credentials are incorrect', () => {
    it('should display error message when password is incorrect', () => {
        cy.login(credentials.standardUser, 'incorrectpwd')
        cy.assertVisibility(login.errorBanner).and('have.text', 'Epic sadface: Username and password do not match any user in this service');
        errorIconsVisible();
    })
    it('should display error message when username is incorrect', () => {
        cy.login('incorrectuser', credentials.password)
        cy.assertVisibility(login.errorBanner).and('have.text', 'Epic sadface: Username and password do not match any user in this service');
        errorIconsVisible();
    })
    it('should display error message when both user and password info is incorrect', () => {
        cy.login('incorrectuser', credentials.password)
        cy.assertVisibility(login.errorBanner).and('have.text', 'Epic sadface: Username and password do not match any user in this service');
        errorIconsVisible();
    })
})



