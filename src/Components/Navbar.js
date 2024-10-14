// src/components/Navbar.jsx

import React from 'react';
import '../CSS/Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        NIRAJ
      </div>
      <ul className="navbar__links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a href="/path-to-your-resume.pdf" className="resume-button" download>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
