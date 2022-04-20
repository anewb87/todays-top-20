describe('Today\s Top 20-ish landing page flow', () => {
  beforeEach(() => {
    const apiKey = process.env.REACT_APP_API_KEY
    cy.intercept('GET', `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`,
      { fixture: 'articles.json' }).as('getAllArticles')

    cy.visit('http://localhost:3000/')
  })

  it('Should be able to search for an article by words contained in the title', () => {
    cy.get('input')
      .type('millions')
      .get('button')
      .click()
      .get('.article-card')
      .should('have.length', 1)
  })
})