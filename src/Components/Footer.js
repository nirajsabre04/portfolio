import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import '../CSS/Footer.css'; // Make sure to create the CSS file

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <h1>Niraj's Tech Portfolio</h1>
        <hr />
        <p className="footer-bottom-text">
          © 2024 Niraj Sabre. All Rights Reserved. <br />
    
        </p>
        <div className="built-with">
          <span>Built With</span>
          <FontAwesomeIcon icon={faReact} className="react-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
