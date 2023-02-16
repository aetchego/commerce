describe('Header', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('links to the correct pages', () => {
    cy.getBySel('logo').click()
    cy.location('pathname').should('eq', '/')

    cy.getBySel('nav-link-search').click()
    cy.location('pathname').should('eq', '/search')
  })

  it.only('should print the correct search answer', () => {
    cy.getBySel('search-input').eq(0).type('White{enter}')
    cy.get('[data-test="product-tag"]')
      .eq(0)
      .within(() => {
        cy.get('[data-test="product-name"]').contains('White')
      })
  })
})

export {}
