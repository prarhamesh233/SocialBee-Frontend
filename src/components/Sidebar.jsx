import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBarModal from "./SearchBarModal"; // Import the SearchBarModal component
import '../css/Sidebar.css'

function SideBar() {
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);
  console.log("isSearchModalOpen:", isSearchModalOpen);
  return (
    <div className="sidebar">
      <nav>
        <h5>BHAITYA</h5>
        <Link to="/">
          <span className="material-icons">home</span>Home
        </Link>
        <Link to="/profile">
          <span className="material-icons">account_circle</span>Profile
        </Link>
        <Link to="/explore">
          <span className="material-icons">explore</span>Explore
        </Link>
     
        <Link to="/SearchBarModal" onClick={() => setSearchModalOpen(true)}>
          <span className="material-icons">search</span>Search
        </Link>
        <Link to="">
          <span className="material-icons">logout</span>Logout
        </Link>
      </nav>
  
      {isSearchModalOpen && (
        <SearchBarModal
          onClose={() => setSearchModalOpen(false)} // Pass a callback to close the modal
        />
      )}
    </div>
  );
}

export default SideBar;
