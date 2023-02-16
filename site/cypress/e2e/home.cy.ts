describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the first product of our page', () => {
    cy.get('[data-test="product-tag"]')
      .eq(0)
      .within(() => {
        cy.get('[data-test="product-name"]').contains('White Shirt')
        cy.get('[data-test="product-price"]').contains('15')
      })
  })

  it('displays the correct alt on image', () => {
    cy.getBySel('product-img')
      .eq(0)
      .get('img[alt="White Shirt"]')
      .should('exist')
  })

  it('displays cookies at the bottom of the page', () => {
    cy.getBySel('cookie-span').should('exist')
  })
})

export {}
