import React from 'react'

const SearchBar = ({search, handleChange}) => {
  return (
    <div>
        <label htmlFor="search">Search</label>
        <input type="search" name='search' value={search} onChange={handleChange} />
    </div>
  )
}

export default SearchBar