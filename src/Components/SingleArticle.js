import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleArticle = ({ allArticles }) => {
  const [singleArticle, setSingleArticle] = useState({})
  let { id } = useParams();
  console.log('singlearticleid', id)

  useEffect(() => {
    const detailedArticle = allArticles.find(article => {
      return article.id === parseInt(id)
    })
    setSingleArticle(detailedArticle)
  }, [allArticles, id])

  console.log('singleArticle', singleArticle)

  return (
    <section className='single-article'>
      <div className='article-image'>
        <img className='picture' src={singleArticle.media} alt={`Article: ${singleArticle.title}`} />
      </div>
      <div className='article-info'>
        <h2 className='details-title'>{singleArticle.title}</h2>
        <p className='byline'>{singleArticle.byline}</p>
        <p>Newspaper Section: {singleArticle.section}</p>
        <p>{singleArticle.abstract}</p>
        <a className='anchor-tag' href={singleArticle.url} target='_blank'>Read the Full Article</a>
      </div>
    </section>
  )
}

export default SingleArticle