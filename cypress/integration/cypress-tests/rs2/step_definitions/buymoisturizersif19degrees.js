describe('Shop for Moisturizers', () => {
    it('should navigate to the moisturizers page and add a product to the cart if the temperature is below 19 degrees', () => {
      // Visit the temperature page
      cy.visit('https://weathershopper.pythonanywhere.com/');
  
      // Verify the temperature is below 19 degrees
      cy.get('#temperature').then(($temp) => {
        const temperature = parseInt($temp.text());
        expect(temperature).to.be.lessThan(19);
  
        if (temperature < 19) {
          // Click the "Buy Moisturizers" button
          cy.contains('button', 'Buy moisturizers').click();
  
          // Verify redirection to the moisturizers page
          cy.url().should('include', '/moisturizers');
  
          // Add a product to the cart
          cy.get('.product-item').first().within(() => {
            cy.contains('button', 'Add to cart').click();
          });
  
          // Verify the product is added to the cart
          cy.get('#cart-count').should('contain', '1');
        }
      });
    });
  });