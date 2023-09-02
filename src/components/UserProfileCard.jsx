// UserProfileCard.js
import React from 'react';
import '../css/UserProfileCard.css'

function UserProfileCard({ userProfile }) {
  return (
    <div className='user-profile-card'>
      <div>
        <h2>{userProfile.username}</h2>
        <p>{userProfile.bio}</p>
        {/* Add more profile details here */}
      </div>
    </div>
  );
}

export default UserProfileCard;
