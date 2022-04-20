import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const SingleArticle = ({ allArticles }) => {
  const [singleArticle, setSingleArticle] = useState({})
  
  let { id } = useParams();

  useEffect(() => {
    const detailedArticle = allArticles.find(article => {
      return article.id === parseInt(id)
    })
    console.log('detailed article', detailedArticle)
    setSingleArticle(detailedArticle)
  }, [])

  console.log('singleArticle', singleArticle)

  return (
    <section>
      <div className='article-image'>
        <img className='picture' src={singleArticle.media} alt={`Photo for article: ${singleArticle.title}`} />
      </div>
      <div className='article-info'>
        <h2>{singleArticle.title}</h2>
        <p>{singleArticle.byline}</p>
        <p>Section: {singleArticle.section}</p>
        <p>{singleArticle.abstract}</p>
        <a href={singleArticle.url}>Read the Full Article</a>
      </div>
    </section>
  )
}

export default SingleArticle