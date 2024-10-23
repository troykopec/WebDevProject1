// src/AboutMe.js

import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px 0' }}>
      <div style={{ width: '80%', maxWidth: '1200px' }}>
      {/* Header */}
      <header className="header">
        <h1>About Me</h1>
      </header>
      </div>

      {/* Profile Section */}
      <section className="profile-section">
        <img 
          className="headshot" 
          src="https://via.placeholder.com/150" 
          alt="Headshot"
        />
        <div className="biography">
          <h2>Biography</h2>
          <p>
            Hello! I'm John Doe, a passionate web developer with experience in React, JavaScript, and front-end development.
            I love creating interactive and visually appealing web applications.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Skills</h2>
        <img 
          className="skills-image" 
          src="https://via.placeholder.com/400x150" 
          alt="Skills"
        />
      </section>

      {/* Resume Section */}
      <section className="resume-section">
        <a 
          className="resume-link" 
          href="https://example.com/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          View My Resume
        </a>
      </section>

      {/* Images Section */}
      <section className="images-section">
        <img 
          className="image" 
          src="https://via.placeholder.com/150" 
          alt="Image 1"
        />
        <img 
          className="image" 
          src="https://via.placeholder.com/150" 
          alt="Image 2"
        />
      </section>

    </div>
  );
};

export default AboutMe;
