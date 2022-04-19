import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getArticles } from '../apiCalls';
import NavBar from './NavBar';
import ArticlesContainer from './ArticlesContainer';
import SingleArticle from './SingleArticle';
import Error from './Error';
import '../Styling/App.scss'

const  App = () => {
  const [allArticles, setAllArticles] = useState([])

  useEffect(() => {
    getArticles()
      .then(data => console.log('in app', data))
  }, []);

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<ArticlesContainer/>} />
        <Route path="article/:id" element={<SingleArticle/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
