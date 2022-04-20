import React from 'react';
import ArticleCard from './ArticleCard';
import '../Styling/ArticlesContainer.scss'

const ArticlesContainer = ({ allArticles }) => {

  const cards = allArticles.map(article => {
    return (
      <ArticleCard 
        id={article.id}
        key={article.id}
        title={article.title}
        photo={article.media}
      />
    )
  })

  return (
    <div className='articles-container'>
      {cards}
    </div>
  )
}

export default ArticlesContainer