describe('Today\s Top 20-ish flow from landing page with all articles displayed to the more detailed article page', () => {
  beforeEach(() => {
    const apiKey = process.env.REACT_APP_API_KEY
    cy.intercept('GET', `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`,
      { fixture: 'articles.json' }).as('getAllArticles')

    cy.visit('http://localhost:3000/')
  })

  it('Should display error if user enters errant url and navigate back to home', () => {
    cy.visit('http://localhost:3000/smokeythebear')
      .get('h2')
      .should('have.text', 'FAKE NEWS!')
      .get('p')
      .should('have.text', "Let's rewrite some history and try again.")
      .get('button')
      .eq(1)
      .click()
      .url()
      .should('eq', 'http://localhost:3000/')
  })

  it('Should display a message indicating when there are no articles with a given search term and navigate back to home', () => {
    cy.get('input')
      .type('lexy')
      .get('button')
      .first()
      .click()
      .get('h2')
      .should('have.text', 'No articles found for that search. Please try again.')
      .get('button')
      .eq(1)
      .click()
      .url()
      .should('eq', 'http://localhost:3000/')
  })
})