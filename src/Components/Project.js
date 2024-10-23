import React, { useState } from 'react';
import '../CSS/Project.css'; // Assuming you have a CSS file for styling
import P1 from '../P1.png';
import P2 from '../P2.png';
import P4 from '../P4.png';
import P3 from '../P3.png';

const projects = [
  {
    id: 1,
    name: 'Ecoluxury - E-commerce Website',
    description: 'Ecoluxury is an e-commerce website developed using React.js for the frontend and PHP for backend operations. It offers a seamless user experience for browsing and purchasing products, with secure Paytm payment integration for easy and safe transactions.',
    image: P1,
    technologies: ['React', 'PHP', 'PhonePe Integration', 'JavaScript', 'CSS'],
    link: 'https://ecoluxury.in',
  },
  {
    id: 2,
    name: 'BlogChain - Fullstack Web Application',
    description: 'BlogChain is a fullstack web application developed using React and Firebase. It allows users to sign in, sign up, and write blogs on any topic. The blogs are available for other users to read.',
    image: P2,
    technologies: ['React', 'Firebase', 'JavaScript', 'CSS'],
    link: 'https://blog-chain-three.vercel.app/post/1706874742632',
  },
  {
    id: 3,
    name: 'Sapalogy Training - SAP Training Institute Website',
    description: 'A comprehensive training institute website built using React. The website offers various SAP-related courses, with user-friendly navigation, detailed course descriptions, and an intuitive interface for students to explore and enroll in courses.',
    image: P3,
    technologies: ['React', 'JavaScript', 'CSS', 'Responsive Design'],
    link: 'https://sapalogytraining.com/',
  },
  {
    id: 4,
    name: 'Weather App',
    description: 'A weather application that provides real-time weather updates for any city, with light and dark mode functionality.',
    image: P4,
    technologies: ['OpenWeather API', 'Axios', 'React', 'CSS'],
    link: 'https://weather-app-by-niraj.netlify.app/',
  }
];

const Project = () => {
  const [showFullDescription, setShowFullDescription] = useState({});

  // Toggle function for "See More"
  const toggleDescription = (id) => {
    setShowFullDescription((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section className="project-section" id="project">
      <h1 className="project-heading">My Projects</h1>
      <p className="project-info">Here are some of my personal and work projects.</p>

      <div className="project-grid">
        {projects.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
            key={project.id}
          >
            <div className="project-card">
              <img src={project.image} alt={project.name} className="project-image" />
              <div className="project-content">
                <h2 className="project-name">{project.name}</h2>

                {/* Conditionally render the full or truncated description with "See More" */}
                <p className="project-description" style={{ height: showFullDescription[project.id] ? 'auto' : '60px' }}>
  {showFullDescription[project.id]
    ? project.description
    : `${project.description.slice(0, 100)}... `}

  <span
    className="see-more-text"
    onClick={(e) => {
      e.preventDefault();
      toggleDescription(project.id);
    }}
    style={{ color: 'white', cursor: 'pointer' }}
  >
    {showFullDescription[project.id] ? 'See Less' : 'See More'}
  </span>
</p>


                <div className="technologies-used">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-icon">{tech}</span>
                  ))}
                </div>
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="icon">🔗</i> {/* Icon for the project link */}
              </a>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Project;
