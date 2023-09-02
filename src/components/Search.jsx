import React from "react";

function Search(){
    return (
        <div className="search">
           <input type="text" placeholder="Find user" spellCheck="false" className="search-bar"/>
           <button type="submit" className="button">Search</button>
           
        </div>
    );
}
export default Search;