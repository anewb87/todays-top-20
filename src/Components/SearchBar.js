import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom'


const SearchBar = ({ searchArticles }) => {
  const [searchInput, setSearchInput] = useState('')
  const navigate = useNavigate()

  const clearInput = () => {
    setSearchInput('')
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchArticles(searchInput);
          clearInput();
          navigate('search-results')

          }
        }
      >
        <input
          type='text'
          name='search'
          placeholder='Search by Title'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchBar