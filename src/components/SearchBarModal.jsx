import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import '../css/SearchBarModal.css';

function SearchBarModal({ onClose, onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Declare the navigate function

  const handleSearch = () => {
    // Implement your search logic and call onSearch with the query
    onSearch(searchQuery);

    // Close the modal and navigate to the home page
    onClose();
    navigate('/');
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <input
          type="text"
          className="input"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn" onClick={handleSearch}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBarModal;
