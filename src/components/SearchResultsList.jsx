import React from 'react'
import '../css/SearchResultsList.css'
import SearchResult from './SearchResult'

function SearchResultsList({ results }) {
    return (
      <div className='results-list'>
        
        {results.map((result) => (
          <SearchResult key={result.id} user={result} />
        ))}
      </div>
    );
  }
  
  export default SearchResultsList;
