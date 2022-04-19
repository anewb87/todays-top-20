import { checkResponse, cleanArticles } from "./utils"
const apiKey = process.env.REACT_APP_API_KEY

const getArticles = () => {
  return fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`)
    .then(response => checkResponse(response))
    .then(data => cleanArticles(data))
}

export { getArticles }