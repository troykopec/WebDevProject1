import React from 'react';
import './AboutMe.css';


import headshot from './images/headshot.jpg';
import image2 from './images/tampa1.jpeg';
import image3 from './images/tampa2.jpg';
import image4 from './images/tampa3.jpg';

const AboutMe = () => {
  return (
    <div className='container'>
      <header className='header'>
        <h2>About Me</h2>
      </header>

      <section className="larger-container">


        <img
          className="headshot"
          src={headshot}
          alt="Headshot"
        />

        <div className="content-right">


          <div className="biography">
            <h2>Biography</h2>
            <p>
              Hello! I'm John Doe, a passionate web developer with experience in React, JavaScript, and front-end development.
              I love creating interactive and visually appealing web applications.
            </p>
          </div>

          <section className="skills-section">
            <h2>Skills</h2>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '80%' }} title="React: 80%"></div>
              <div className="progress-label">React: 80%</div>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '70%' }} title="JavaScript: 70%"></div>
              <div className="progress-label">JavaScript: 70%</div>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '90%' }} title="HTML/CSS: 90%"></div>
              <div className="progress-label">HTML/CSS: 90%</div>
            </div>
          </section>


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


          <section className="images-section">
            <img
              className="image"
              src={image2}
              alt="Image 1"
            />
            <img
              className="image"
              src={image3}
              alt="Image 2"
            />
            <img
              className="image"
              src={image4}
              alt="Image 3"
            />
          </section>

        </div>
      </section>
    </div>
  );
};

export default AboutMe;
