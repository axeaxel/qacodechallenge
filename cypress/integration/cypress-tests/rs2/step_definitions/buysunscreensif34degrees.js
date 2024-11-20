describe('Shop for Sunscreens', () => {
    it('should navigate to the sunscreens page and add a product to the cart if the temperature is above 34 degrees', () => {
      // Visit the temperature page
      cy.visit('/temperature');
  
      // Verify the temperature is above 34 degrees
      cy.get('#temperature').then(($temp) => {
        const temperature = parseInt($temp.text());
        expect(temperature).to.be.greaterThan(34);
  
        if (temperature > 34) {
          // Click the "Buy Sunscreens" button
          cy.contains('button', 'Buy sunscreens').click();
  
          // Verify redirection to the sunscreens page
          cy.url().should('include', '/sunscreens');
  
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