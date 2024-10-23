// src/About.jsx
import React from 'react';
import '../CSS/About.css'; // Import the CSS file
import DP from '../Dp.svg'

const About = () => {
  return (
    <div className="about-container" id='about'>
      {/* Left Side: Image and Description */}
      <div className="about-left">
      <h2 className="about-heading">About Me</h2>
        <img
          src={DP} // Replace with your image path
          alt="Niraj Sabre"
          className="about-image"
        />
        <p className="about-description">
        I am a passionate web developer with expertise in frontend development and a solid understanding of backend technologies. Currently working at Sapalogy Pvt Ltd, I excel in creating dynamic, responsive websites and continuously strive to enhance my skills. I enjoy tackling complex challenges and staying up-to-date with the latest web technologies to deliver high-quality solutions.
        </p>
      </div>

      {/* Separator Line */}
      <div className="separator"></div>

      {/* Right Side: Education Details */}
      <div className="about-right">
      
        <div className="education">
          <h3>Education</h3>
          <ul>
            <li>
              <strong>Bachelors in Technology (B. Tech) AI & DS</strong><br />
              Priyadarshini College of Engineering Nagpur, 2020-2024 (85%)

            </li>
            <li>
              <strong>Higher Secondary Certificate (HSC) Science</strong><br />
              Shri Mathuradas Mohota College Nagpur, 2018-2020 (72.46%)
            </li>
            <li>
              <strong>Secondary School Certificate (SSC)</strong><br />
              Pandit Bachharaj Vyas Vidyalaya Nagpur, 2017-2018 (94%)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
