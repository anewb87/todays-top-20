import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getArticles } from '../apiCalls';
import NavBar from './NavBar';
import Loader from './Loader';
import ArticlesContainer from './ArticlesContainer';
import SingleArticle from './SingleArticle';
import Error from './Error';
import '../Styling/App.scss'

const  App = () => {
  const [allArticles, setAllArticles] = useState([])
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

  console.log('all articles', allArticles)

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
        <NavBar/>
        <Routes>
          <Route path="/" element={<ArticlesContainer allArticles={allArticles}/>} />
          <Route path="article/:id" element={<SingleArticle allArticles={allArticles}/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </>
    );
  }
}

export default App;
