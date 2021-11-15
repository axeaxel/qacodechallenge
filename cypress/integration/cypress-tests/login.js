describe('Login test', () => {
  it('logins on trello page', () => {
    cy.visit('https://trello.com/b/KFzY71Zf/board')

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

  })
})