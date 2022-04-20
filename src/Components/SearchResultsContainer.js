import React from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';

const SearchResultsContainer = ({ searchResults }) => {
  
  const cards = searchResults.map(article => {
    return (
      <ArticleCard
        id={article.id}
        key={article.id}
        title={article.title}
        photo={article.media}
      />
    )
  })

  const determineDisplay = () => {
    if (searchResults.length === 0) {
      return (
        <div className='no-results'>
          <h2>No articles found for that search. Please try again.</h2>
          <Link to='/'>
            <button className='go-home-btn'>Home</button>
          </Link>
        </div>
      )
    } else {
      return (
        <div className='articles-container'>
          {cards}
        </div>
      )
    }
  }

  return (
    <div>
      {determineDisplay()}
    </div>
  )
}

export default SearchResultsContainer