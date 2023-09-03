import React, { useState, useEffect } from 'react';
import UserProfileCard from './UserProfileCard';
import axios from 'axios';
import '../css/UserProfileCard.css';

function Profile() {
  const [userProfiles, setUserProfiles] = useState([]);

  const fetchUserProfiles = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      if (response.status === 200) {
        setUserProfiles(response.data);
      } else {
        throw new Error('Failed to fetch user profiles');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserProfiles();
  }, []);

  return (
    <div className='profile-card-container'>
      {userProfiles.map((userProfile) => (
        <UserProfileCard key={userProfile._id} userProfile={userProfile} />
      ))}
    </div>
  );
}

export default Profile;
