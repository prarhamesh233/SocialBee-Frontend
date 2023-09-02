import React from 'react';
import UserProfileCard from './UserProfileCard';

import '../css/UserProfileCard.css';

const staticUserProfiles = [
  {
    id: 1,
    username: 'user1',
    bio: 'This is the bio for user 1.',
  },
  // Add more user profiles here
];

function Profile() {
  return (
    <div className='profile-card-container'> {/* Updated container class */}
      {staticUserProfiles.map((userProfile) => (
        <div  key={userProfile.id}> {/* Updated user profile card class */}
          <UserProfileCard userProfile={userProfile} />
        </div>
      ))}
    </div>
  );
}

export default Profile;
