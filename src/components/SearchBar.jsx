import React from 'react'
import '../css/SearchBar.css'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'


function SearchBar({setResults}) {
    const[input,setInput]=useState('');

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

    const handleChange =(value)=>{
        setInput(value);
        fetchData(value);


    }
  return (

    <div className='input-wrapper'>
        <FaSearch id='search-icon'></FaSearch>
        <input placeholder='type to search....'
        value={input}
        onChange={(e)=>handleChange(e.target.value)}
        ></input>


      
    </div>
  )
}

export default SearchBar;
