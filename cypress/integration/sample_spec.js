describe('My First Test', function() {
    it('Visits my site', function() {
      cy.visit('http://localhost:3000')
      //cy.get('ul').get('li').should('have.value', 'Zoolander')
      cy.get('ul > li:nth-child(2)').contains('Zoolander')
    })
})