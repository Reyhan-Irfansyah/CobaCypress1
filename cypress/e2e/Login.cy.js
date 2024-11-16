describe('Verify login page', () => {
  it('Verify login with valid credentials', () => {
    cy.visit('/')
    cy.xpath('/html/body/div[1]/div[1]/header/div[2]/div/div/nav/div[1]/a').click()
    cy.get('#email').type('reyhanirfansyah04@gmail.com')
    cy.get('#passwd').type('ReyhanTest')
    cy.get('#SubmitLogin').click()
    cy.get('a.account').should('contain', 'Reyhan Irfansyah')

  })

  it('Verify login with invalid credentials', () => {
    cy.visit('/')
    cy.xpath('/html/body/div[1]/div[1]/header/div[2]/div/div/nav/div[1]/a').click()
    cy.get('#email').type('test@test.com')
    cy.get('#passwd').type('test123sword')
    cy.get('#SubmitLogin').click()
    cy.get('.alert-danger').should('contain', 'Authentication failed.')
  })

  it('Verify login with empty email', () => {
    cy.visit('/')
    cy.xpath('/html/body/div[1]/div[1]/header/div[2]/div/div/nav/div[1]/a').click()
    cy.get('#SubmitLogin').click()
    cy.get('.alert-danger').should('contain', 'An email address required.')
  })

  it('Verify login with empty password', () => {
    cy.visit('http://www.automationpractice.pl/index.php')
    cy.xpath('/html/body/div[1]/div[1]/header/div[2]/div/div/nav/div[1]/a').click()
    cy.get('#email').type('reyhanirfansyah04@gmail.com')
    cy.get('#SubmitLogin').click()
    cy.get('.alert-danger').should('contain', 'Password is required.')
  })
})