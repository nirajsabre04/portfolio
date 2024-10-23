// src/components/Contact.jsx

import React, { useState } from 'react';
import '../CSS/Contact.css';
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    // Replace 'YOUR_ACCESS_KEY_HERE' with your actual Web3Forms access key
    formData.append("access_key", "a4230bfb-5113-4a25-9422-49486332d5f7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.error("Error:", data);
        setResult(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left Side: Contact Form */}
        <div className="contact-form-container">
          <h2>Contact Me</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name<span>*</span></label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email<span>*</span></label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact Number<span>*</span></label>
              <input type="tel" id="contact" name="phone" placeholder="Your Contact Number" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message<span>*</span></label>
              <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <div className="form-buttons">
              <button type="submit" className="submit-button">Submit</button>
              <button type="reset" className="reset-button">Reset</button>
            </div>
          </form>
          {result && <span className="form-result">{result}</span>}
        </div>

        {/* Right Side: Get Connected */}
        <div className="contact-info-container">
          <h2>Get Connected with Me</h2>
          <div className="social-icons">
            <a href="https://x.com/SabreNiraj48632" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://github.com/nirajsabre04" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/niraj-sabre-8a5020258/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <div className="resume-download">
            <a href="/resume.pdf" download className="contact-resume-button">
              <FaDownload /> Download Resume
            </a>
          </div>
          <div className="contact-email">
            <FaEnvelope /> <a href="mailto:nirajsabre04@gmail.com">nirajsabre04@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
