describe('Shop for Sunscreens', () => {
    it('should navigate to the sunscreens page and add a product to the cart if the temperature is above 34 degrees', () => {
      // Visit the temperature page
      cy.visit('https://weathershopper.pythonanywhere.com/');
  
      // Verify the temperature is above 34 degrees
      cy.get('#temperature').then(($temp) => {
        const temperature = parseInt($temp.text());
        expect(temperature).to.be.greaterThan(34);
  
        if (temperature > 34) {
          // Click the "Buy Sunscreens" button
          cy.contains('button', 'Buy sunscreens').click();
  
          // Verify redirection to the sunscreens page
          cy.url().should('include', '/sunscreen');

          // Pick a random product and store its name
          cy.get('.font-weight-bold').first().invoke('text').then((productName) => {
          // Store the selected product name
          const selectedProduct = productName.trim();
  
          // Add the product to the cart
        cy.contains('.font-weight-bold', selectedProduct)
              .parent()
              .find('button')
              .click();
  
            // Verify the product is added to the cart
            cy.get('#cart').should('contain', '1 item(s)');
  
            // Click the "Cart" button
            cy.contains('button', 'Cart -').click();
  
            // Verify redirection to the cart page
            cy.url().should('include', '/cart');
  
           // Verify the product is listed in the table
          cy.get('table.table-striped tbody').within(() => {
            cy.contains('td', selectedProduct).should('exist'); // Verify product name
          });

          // Click the "Pay with Card" button
          cy.get('button.stripe-button-el').click();
          
          // Interact with Stripe's iframe to fill in card details
          cy.frameLoaded('iframe[name*="stripe_checkout_app"]'); // Ensure iframe is loaded
          cy.iframe('iframe[name*="stripe_checkout_app"]').within(() => {
            // Fill in card details
            cy.get('input[name="cardnumber"]').type('4242424242424242', { delay: 100 });
            cy.get('input[name="exp-date"]').type('12/30', { delay: 100 }); // Any future date
            cy.get('input[name="cvc"]').type('123', { delay: 100 }); // Any 3 digits
            cy.get('input[name="postal"]').type('12345', { delay: 100 }); // Optional Postal Code

            // Click the Pay button
            cy.get('button').contains('Pay').click();
          });

          // Verify successful payment (assume a confirmation message or redirection)
          cy.url().should('include', '/confirmation'); // Replace with actual confirmation page URL
          cy.contains('Payment successful').should('be.visible'); // Replace with actual confirmation text
        });
        }
      });
    });
  });