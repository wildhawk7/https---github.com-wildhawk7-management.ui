// src/components/Home.js

import React from 'react';

const Home = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh', // Full viewport height
        backgroundImage: 'url(/dashboard.jpg)', // Correct path to the image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
      }}
    >
      {/* Optional: Add any overlay content here */}
    </div>
  );
};

export default Home;
