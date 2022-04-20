const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error(`You don't got the answers. Come back later.`)
  } else {
    return response.json()
  }
}

const cleanArticles = (articleInfo) => {
  const filteredData = articleInfo.results.filter(article => {
    if (article.media.length > 0) {
      return article
    }
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