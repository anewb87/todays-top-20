const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error(`You don't got the answers. Come back later.`)
  } else {
    return response.json()
  }
}

const cleanArticles = (articleInfo) => {
  console.log('clean articles', articleInfo)
  const cleanedData = articleInfo.results.map(article => {
    return {
      id: article.id,
      abstract: article.abstract,
      byline: article.byline,
      section: article.section,
      subsection: article.subsection,
      title: article.title,
      url: article.url,
      media: article.media[0],
      published_date: article.published_date,
    }
  })
  console.log('cleanedData', cleanedData)

  return cleanedData
}

export { checkResponse, cleanArticles }