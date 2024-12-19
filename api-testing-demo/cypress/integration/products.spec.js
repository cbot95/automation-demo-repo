
describe('API Test - Fetch Products', () => {
    it('Should fetch the list of products and validate the response', () => {
        // Send a GET request to the endpoint
        cy.request('GET', 'https://react-shopping-cart-67954.firebaseio.com/products.json').then((response) => {
            // Assert that the status code is 200
            const productsArray = response.body.products
            expect(response.status).to.eq(200);
            // Assert that the response body is an array
            expect(productsArray).to.be.an('array');
            // // Assert that each product object contains required fields
            productsArray.forEach((products) => {
                expect(products).to.have.property('availableSizes').that.is.an('array');
                expect(products).to.have.property('currencyFormat').that.is.a('string');
                expect(products).to.have.property('currencyId').that.is.a('string');
                expect(products).to.have.property('description').that.is.a('string');
                expect(products).to.have.property('id').that.is.a('number');
                expect(products).to.have.property('installments').that.is.a('number');
                expect(products).to.have.property('isFreeShipping').that.is.a('boolean');
                expect(products).to.have.property('price').that.is.a('number');
                expect(products).to.have.property('sku').that.is.a('number');
                expect(products).to.have.property('style').that.is.a('string');
                expect(products).to.have.property('title').that.is.a('string');
            });
        });
    });
});
