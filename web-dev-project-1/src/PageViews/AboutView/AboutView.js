//necessary imports
import React from 'react';
import styles from './styles'; 

function AboutView() {
  return (
    <div style={styles.aboutContainer}>
      {/* creating the header */}
      <h1 style={styles.header}>About Me</h1>

      {/* importing the profile pic from images */}
      <div style={styles.profileSection}>
        <img src="/images/profileIMG.png" alt="Profile" style={styles.profileImg} />
        <p style={styles.biography}>
          I'm a dedicated software developer with a passion for learning new technologies and building efficient, scalable web applications. Over the years, I've honed my skills in full-stack development, primarily using React, Node.js, and Python. Outside of work, I enjoy collaborating with other developers and contributing to open-source projects.
        </p>
      </div>

      {/* importing skills image */}
      <div style={styles.skillsSection}>
        <img src="/images/skills2IMG.png" alt="Skills Overview" style={styles.skillsImg} />
      </div>

      {/* creating links */}
      <div style={styles.linksSection}>
        <a href="https://docs.google.com/templates?category=Resumes" target="_blank" rel="noopener noreferrer" style={styles.link}>
          View My Resume
        </a>
        <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer" style={styles.link}>
          Sample Link 1
        </a>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" style={styles.link}>
          Sample Link 2
        </a>
      </div>

      {/* creating github and linkedIn buttons */}
      <div style={styles.iconsSection}>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          <img src="/images/gitLogo.png" alt="GitHub" style={styles.icon} />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedinLogo.png" alt="LinkedIn" style={styles.icon} />
        </a>
      </div>
    </div>
  );
}

export default AboutView;
