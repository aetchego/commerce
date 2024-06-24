describe('Shopping Cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('users can add one item to the cart', () => {
    cy.getBySel('product-tag').eq(0).click()
    cy.getBySel('add-cart').click()
    cy.get('[aria-label="Cart items: 1"]').contains('1')
  })

  it.only('users can add several items to the shopping card', () => {
    cy.getBySel('product-tag').eq(0).click()
    cy.getBySel('add-cart').click()
    cy.visit('/')
    cy.getBySel('product-tag').eq(1).click()
    cy.getBySel('add-cart').click()
    cy.get('[aria-label="Cart items: 2"]').contains('2')
  })
})

export {}
