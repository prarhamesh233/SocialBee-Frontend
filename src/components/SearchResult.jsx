import React from 'react'
import '../css/SearchResult.css'
function SearchResult({ user }) {
    return (
      <div className='result-item'>
        <h3>{user.firstName} {user.lastName}</h3>
        {/* Add more user information here */}
      </div>
    );
  }
  
  export default SearchResult;


