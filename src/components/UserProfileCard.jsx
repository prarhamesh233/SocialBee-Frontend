// UserProfileCard.js
import React from 'react';
import '../css/UserProfileCard.css'



function UserProfileCard({ userProfile }) {
  const { firstName, lastName } = userProfile;

  return (
    <div className='user-profile-card'>
      <h6>{`${firstName} ${lastName}`}</h6>
      {/* You can add more fields here if needed */}
    </div>
  );
}

export default UserProfileCard;
