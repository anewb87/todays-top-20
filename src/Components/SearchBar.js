import React, { useState }from 'react';


const SearchBar = ({ searchArticles }) => {
  const [searchInput, setSearchInput] = useState('')

  const clearInput = () => {
    setSearchInput('')
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchArticles(searchInput)
          clearInput()
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