describe('Today\s Top 20-ish flow from landing page with all articles displayed to the more detailed article page', () => {
  beforeEach(() => {
    //have not yet figured out how to intercept this properly without exposing api key
    // const apiKey = process.env.REACT_APP_API_KEY
    // cy.intercept('GET', `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`, 
    // { fixture: 'articles.json' }).as('getAllArticles')

    cy.visit('http://localhost:3000/')
  })

  it('Should be able to visit the landing page and render the correct elements', () => {
    cy.get('a')
      .should('have.text', "Today's Top 20-ish")
      .get('input')
      .should('exist')
      .get('button')
      .should('have.text', 'Search')
      .get('.article-card')
      .should('have.length', 20)
      .get('.article-card')
      .first()
      .should('have.text', 'Millions move closer to student loan forgiveness with one-time government waivers.')
      .get('img')
      .should('have.length', 20)
      .first()
      .should('have.attr', 'alt', 'Article: Millions move closer to student loan forgiveness with one-time government waivers.')
  })

  it('Should be able to select an article which routes to a new page displaying details of the chosen article as well as being able to navigate to the NYT full article', () => {
    cy.get('.article-card')
      .first()
      .click()
      .url()
      .should('eq', 'http://localhost:3000/article/100000008310203')
      .get('a')
      .first()
      .should('have.text', "Today's Top 20-ish")
      .get('a')
      .eq(1)
      .should('have.text', 'Back to Home')
      .get('a')
      .eq(2)
      .should('have.text', 'Read the Full Article')
      .get('a')
      .eq(2)
      .click()
  })

  it('Should be able to navigate back home from the detailed article page view', () => {
    cy.get('.article-card')
      .first()
      .click()
      .get('a')
      .eq(1)
      .click()
      .url()
      .should('eq', 'http://localhost:3000/')
  })
})