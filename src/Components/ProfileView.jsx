import React from 'react';

function ProfileView({ profile }) {
  const { name, phone, city, email, currentCompany, currentRole, imgSrc } =
    profile;
  return (
    // profiles.map((profile) =>
    <div className='main-profile-div' key={Date.now}>
      <div className='main-row-div'>
        <div className='profile-img-col'>
          <img src={`${imgSrc}`} alt={`${name} Profile Picture`} />
        </div>
        <div className='profile-content-col'>
          <h1>{`${name}`}</h1>
          <p>{`Phone: ${phone}`}</p>
          <p>{`Email: ${email}`}</p>
          <p>{`Location: ${city}`}</p>
          <h3>Current Work Experience:</h3>
          <p>{`Current Company: ${currentCompany}`}</p>
          <p>{`Current Job Profile: ${currentRole}`}</p>
        </div>
      </div>
    </div>
    // )
  );
}

export default ProfileView;
