import React, { useState } from 'react'
import SearchBar from './SearchBar'
import SearchResultsList from './SearchResultsList';

function Search() {
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  

  const handleResultClick = (result) => {
    setSelectedResult(result);
  };
    
    const fetchData = (value) => {
      fetch('http://localhost:3001/users')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch user profiles');
          }
          return response.json(); // Parse the JSON data
        })
        .then((json) => {
          console.log(json)
          // Handle the parsed JSON data here
       const results=json.filter((user)=>{
          return (
              value
           && user && user.firstName
           && user.firstName.toLowerCase().includes(value));
       });
       setResults(results);
        })
        .catch((error) => {
          console.error(error);
        });
    };
  return (
    <div className='main-container'>
    <div className='searchBar-container'>
    <SearchBar selectedResult={selectedResult} onSearch={fetchData} />
        <SearchResultsList results={results} onResultClick={handleResultClick} />

      
    </div>
    </div>
  )
}

export default Search
