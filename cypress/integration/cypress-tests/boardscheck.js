describe('check boards', () => {
  it('checks if boards are present', () => {
    cy.visit('https://trello.com/alexandruchircu5/boards')

//Login
    cy.get('.js-login').click()

    //Fill in the username
    cy.get('#user')
    .should('be.visible')
    .type('schumi_axel@yahoo.com')

    //Login
    cy.get('#login')
      .should('be.visible')
      .click()

    //Fill in password
    cy.get('input[name=password]')
    .should('be.visible')
    .type('Testparola2020£')
    cy.wait(2000)

    //Fill in password
    cy.get('input[name=password]')
    .should('be.visible')
    .type('Testparola2020£')
      cy.wait(2000)

    //Login
     cy.get('#login-submit')
      .should('be.visible')
      .click()
       cy.wait(2000)

       //Access the board
       cy.visit('https://trello.com/b/KFzY71Zf/board')
       cy.get()

       })
    })