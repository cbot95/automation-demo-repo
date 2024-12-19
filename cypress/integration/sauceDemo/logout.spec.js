import sauceDemo from '../../pageObjects/sauceDemo.json'

const { login, credentials, inventory } = sauceDemo

beforeEach(() => {
    cy.goToPage()
})

describe('Tests logout', () => {
    it('should log out and successfully redirect to the login page', () => {
        cy.login(credentials.standardUser, credentials.password)
        cy.url().should('eq', inventory.url)
        cy.assertVisibility(sauceDemo.openMenu);
        cy.get('[class=bm-burger-button]').click()
        //cy.clickDataTest(sauceDemo.openMenu, {force: true});
        cy.assertVisibility(sauceDemo.sidebarLogout);
        cy.clickDataTest(sauceDemo.sidebarLogout, { force: true });
        cy.url().should('eq', login.url)
    });

    /* the following test is skipped as it is erroring with a 404 when it runs. 
    The url works when visiting manually. To be investigated.
    */
    it.skip('should show error message when navigating to the invetory page while logged out', () => {
        cy.visit(inventory.url)
    })

})