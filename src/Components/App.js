import React, { useState, useEffect } from 'react';
import { getArticles } from '../apiCalls';
import '../Styling/App.css'

const  App = () => {
  const [allArticles, setAllArticles] = useState([])

  useEffect(() => {
    getArticles()
      .then(data => console.log(data.results))
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>

    </div>
  );
}

export default App;
