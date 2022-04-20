import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getArticles } from '../apiCalls';
import NavBar from './NavBar';
import Loader from './Loader';
import ArticlesContainer from './ArticlesContainer';
import SingleArticle from './SingleArticle';
import Error from './Error';
import '../Styling/App.scss'
import SearchResultsContainer from './SearchResultsContainer';

const  App = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('')

  useEffect(() => {
    getArticles()
      .then(cleanedData => {
        setAllArticles(cleanedData);
        setIsLoading(false);
      })
      .catch(error => setError(error) )
  }, []);

  const searchArticles = (searchInput) => {
    let input = searchInput.toLowerCase();
    let matchedArticles = allArticles.filter(article => article.title.toLowerCase().includes(input))
    setSearchResults(matchedArticles)
  }

  if (isLoading) {
    return <>
      <NavBar/>
      <Loader />
    </>
  } else if (error) {
    return <>
      <NavBar/>
      <Error error={error} />
    </>
  } else {
    return (
      <>
        <NavBar searchArticles={searchArticles}/>
        <Routes>
          <Route path='/' element={<ArticlesContainer allArticles={allArticles}/>} />
          <Route path='search-results' element={<SearchResultsContainer searchResults={searchResults}/>}/>
          <Route path='article/:id' element={<SingleArticle allArticles={allArticles}/>} />
          <Route path='*' element={<Error />} />
        </Routes>
      </>
    );
  }
}

export default App;
