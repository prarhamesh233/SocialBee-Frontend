import React, { useState } from 'react'
import SearchBar from './SearchBar'
import SearchResultsList from './SearchResultsList';

function Search() {
    const[results,setResults]=useState([]);
  return (
    <div className='main-container'>
    <div className='searchBar-container'>
        <SearchBar setResults={setResults}></SearchBar>
        <SearchResultsList results={results}></SearchResultsList>
      
    </div>
    </div>
  )
}

export default Search
