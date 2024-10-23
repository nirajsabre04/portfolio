import React from "react";
import Typewriter from "typewriter-effect";
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
import { FaPaintBrush } from "react-icons/fa"; // Example alternative icon
const skills = [
  { icon: <FaHtml5 style={{ color: '#E34C26' }} /> },     // HTML5 (orange)
  { icon: <FaCss3Alt style={{ color: '#1572B6' }} /> },   // CSS3 (blue)
  { icon: <FaJsSquare style={{ color: '#F7DF1E' }} /> },  // JavaScript (yellow)
  { icon: <FaReact style={{ color: '#61DAFB' }} /> },     // React (cyan)
  { icon: <SiTailwindcss style={{ color: '#38B2AC' }} /> }, // Tailwind CSS (teal)
  { icon: <FaBootstrap style={{ color: '#7952B3' }} /> }, // Bootstrap (purple)
  { icon: <SiExpress style={{ color: '#373737' }} /> },   // Express (black)
  { icon: <FaNodeJs style={{ color: '#68A063' }} /> },    // Node.js (green)
  { icon: <SiMongodb style={{ color: '#47A248' }} /> },   // MongoDB (dark green)
  { icon: <FaDatabase style={{ color: '#f29111' }} /> },  // Database (orange)
  { icon: <FaPaintBrush style={{ color: '#00C4CC' }} /> } // Canva (turquoise)
];

const Home = () => {
  return (
    <div className="home-container" id="home">
      {/* Left Side: Greeting and Typing Animation */}
      <div className="home-text">
        <h1 className="home-title">
          Hey👋there! I'm
        </h1>
        <h2 className="home-name">
          <span className="large-name">NIRAJ SABRE</span>
        </h2>
        <p className="typewrite">
          {" "}
          {/* Added color */}
          A Passionate &nbsp;
          <Typewriter
            className="home-typing"
            options={{
              strings: [
                '<span style="color: #F4BC1C; font-weight: bold;">Frontend Developer...</span>',
                '<span style="color: #BB3CCF; font-weight: bold;">Full Stack Developer...</span>',
                '<span style="color: #228B22; font-weight: bold;">Web Developer...</span>',
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
            }}
          />
        </p>
      </div>

      {/* Right Side: Skills Section */}
      <div className="home-skills">
        <div className="additional-info">
          <p>🚀 Currently specializing in Frontend (ReactJs).</p>
          <p>⚡ Web Developer Intern at "Sapalogy Pvt Ltd".</p>
        </div>
        <div>
          <h3 className="skills-title">My Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>{" "}
        </div>
      </div>

      <div>
        {/* Moving Circles */}
        <div className="moving-circle top-right"></div>
        <div className="moving-circle bottom-left"></div>{" "}
      </div>
    </div>
  );
};

export default Home;
