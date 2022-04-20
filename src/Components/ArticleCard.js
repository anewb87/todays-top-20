import React from 'react';
import { Link } from 'react-router-dom';
import '../Styling/ArticleCard.scss'

const ArticleCard = ({ id, title, photo }) => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'black'
  };

  return (
    <div className='article-card'>
      <Link style={linkStyle} to={`article/${id}`}>
        <h2>{title}</h2>
        <img className='thumbnail-pic' src={photo} alt={`Photo for article: ${title}`}/>
      </Link>
    </div>
  )
}

export default ArticleCard