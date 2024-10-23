import React, { useState, useEffect } from 'react';
import '../CSS/Splash.css'; // Assuming you place your styles here

function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000); // Splash screen duration
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showSplash) {
      document.getElementById("main-content").classList.add("show-content");
    }
  }, [showSplash]);

  return (
    <div>
      {showSplash ? (
        <div id="splash-screen">
          <div className="splash-text" id="text1">NIRAJ'S</div>
          <div className="splash-text" id="text2">TECH</div>
          <div className="splash-text" id="text3">PORTFOLIO</div>
        </div>
      ) : (
        <div id="main-content">
          <h1>Welcome to My Portfolio</h1>
          <p>This is the main content of the portfolio.</p>
        </div>
      )}
    </div>
  );
}

export default SplashScreen;
