// src/About.jsx
import React from 'react';
import '../CSS/About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container" id='about'>
      {/* Left Side: Image and Description */}
      <div className="about-left">
        <img
          src="path/to/your/image.jpg" // Replace with your image path
          alt="Niraj Sabre"
          className="about-image"
        />
        <p className="about-description">
          I am a passionate developer with a keen interest in web technologies and a strong foundation in both frontend and backend development. Currently pursuing my Master's in Computer Applications, I thrive on solving challenging problems and continuously improving my skills.
        </p>
      </div>

      {/* Separator Line */}
      <div className="separator"></div>

      {/* Right Side: Education Details */}
      <div className="about-right">
        <h2 className="about-heading">About Me</h2>
        <div className="education">
          <h3>Education</h3>
          <ul>
            <li>
              <strong>Bachelors in Technology (B. Tech)</strong><br />
              Priyadarshini College of Engineering Nagpur, 2020-2024 (85%)

            </li>
            <li>
              <strong>Bachelor of Science (B.Sc) in Information Technology</strong><br />
              Gondwana University, 2019 - 2022
            </li>
            <li>
              <strong>Higher Secondary Certificate (HSC)</strong><br />
              Nagpur Divisional Board, 2017 - 2019
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
