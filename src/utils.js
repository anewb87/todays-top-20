const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error(`Extra! Extra! Read all about how that request didn't quite work.`)
  } else {
    return response.json()
  }
}

const cleanArticles = (articleInfo) => {
  const filteredData = articleInfo.results.filter(article => {
    if (article.media.length > 0 && article.title) {
      return article
    }
    return filteredData
  })

  const cleanData = filteredData.map(article => {
    return {
      id: article.id,
      abstract: article.abstract,
      byline: article.byline,
      section: article.section,
      subsection: article.subsection,
      title: article.title,
      url: article.url,
      media: article.media[0]['media-metadata'][2].url,
      published_date: article.published_date,
    }
  })

  return cleanData
}

export { checkResponse, cleanArticles }