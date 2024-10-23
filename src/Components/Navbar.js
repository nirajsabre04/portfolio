import React, { useState } from "react";
import "../CSS/Navbar.css"; // Import the CSS file
import Spider from "../spider.png";
import Logo from "../Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu
  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      {/* Wrap the logo in an anchor tag */}
      <div className="navbar__logo" onClick={handleLinkClick}>
        <img className="spider" src={Logo} />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Links */}
      <ul className={`navbar__links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={handleLinkClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleLinkClick}>
            About
          </a>
        </li>
        <li>
          <a href="#project" onClick={handleLinkClick}>
            Project
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleLinkClick}>
            Contact
          </a>
        </li>
        <li>
          <a
            href="/Niraj-Resume.pdf"
            className="resume-button"
            download
            onClick={handleLinkClick}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
