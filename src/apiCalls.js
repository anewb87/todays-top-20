const apiKey = process.env.REACT_APP_API_KEY

const getArticles = () => {
  return fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`)
    .then(response => response.json())
}

export { getArticles }