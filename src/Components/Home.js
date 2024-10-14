// src/Home.jsx
import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect"; // Import typewriter-effect

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import "../CSS/Home.css"; // Import the CSS file

const skills = [
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <FaReact />, name: "ReactJS" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <FaDatabase />, name: "SQL" },
  

];

const Home = () => {
  return (
    <div className="home-container">
      {/* Left Side: Greeting and Typing Animation */}
      <div className="home-text">
        <h1 className="home-title">
          Hey there!{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>
        <h2 className="home-name">NIRAJ SABRE</h2>

        <Typewriter
          options={{
            strings: [
              "A Passionate Frontend Developer",
              "A Full Stack Developer",
              "A MERN Stack Developer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 30, // Speed of deletion
          }}
          className="home-typing"
        />
      </div>

      {/* Right Side: Skills Section */}
      <div className="home-skills">
        <h3 className="skills-title">My Skills</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
