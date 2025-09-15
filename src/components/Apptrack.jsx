import React, { useState } from 'react';
import './Apptrack.css';
import UserNav from './userNav';

function Apptrack() {
  const [applicationId, setApplicationId] = useState('');

  const handleTrack = () => {
    if (applicationId) {
      alert(`Tracking application with ID: ${applicationId}`);
      // Implement your tracking logic here
    } else {
      alert("Please enter a valid Application ID.");
    }
  };

  return (
    <div>
      <UserNav/>
    <div className='tracker-box'>
    <div className="tracker-container">
      <h1>Application Tracker</h1>
      <p>Enter your Application ID to track its status:</p>
      <input
        type="text"
        placeholder="Enter Application ID"
        value={applicationId}
        onChange={(e) => setApplicationId(e.target.value)}
        className="tracker-input"
      />
      <button  onClick={handleTrack} className="button-track">Track</button>
    </div>
    </div>
    </div>
  );
}

export default Apptrack;
