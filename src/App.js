import React from 'react';
import './App.css'; // Importing CSS for styling
import welcomeImage from './we.jpg'; // Importing the image

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-message">Welcome to Our Application!</h1>
      <img 
        src={welcomeImage} // Using the imported image
        alt="Welcome" 
        className="welcome-image"
      />
    </div>
  );
};

export default Welcome;
