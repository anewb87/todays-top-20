import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom'
import '../Styling/SearchBar.scss'


const SearchBar = ({ searchArticles }) => {
  const [searchInput, setSearchInput] = useState('')
  const navigate = useNavigate()

  const clearInput = () => {
    setSearchInput('')
  }

  return (
    <div>
      <form
        aria-label='search-form'
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
        <button className='search-btn'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar