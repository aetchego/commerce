describe('Footer', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the correct language', () => {
    cy.get('[aria-label="Language selector"]').within(() => {
      cy.get('img[alt="US Flag"]').should('exist')
    })
  })

  it('should change language', () => {
    cy.get('[aria-label="Language selector"]').click()
    cy.getBySel('languages').within(() => {
      cy.get('a').eq(0).click()
      cy.location('pathname').should('equal', '/es')
    })
  })
})

export {}
