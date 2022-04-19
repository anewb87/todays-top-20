import React from 'react';
import '../Styling/ArticleCard.scss'

const ArticleCard = ({ id, title, photo }) => {

  return (
    <div className='article-card'>
      <h2>{title}</h2>
      <img className='thumbnail-pic' src={photo} alt={`Photo for article: ${title}`}/>
    </div>
  )
}

export default ArticleCard