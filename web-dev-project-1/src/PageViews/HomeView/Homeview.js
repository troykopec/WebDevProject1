//necessary imports
import React from 'react';
import styles from './styles'; 

function HomeView() {
  return (
    <div style={styles.homeContainer}>
      {/*creating the header*/}
      <h1 style={styles.header}>Home</h1>

      {/*inserting the profile image on*/}
      <div style={styles.profileSide}>
        <div style={styles.profileContainer}>
          <img src="/images/profileIMG.png" alt="Profile" style={styles.profileImg} />
        </div>
      </div>

      {/*creating text box*/}
      <div style={styles.chatSection}>
        <div style={styles.chatBubble}>
          <p>I'm a software developer with a passion for building efficient and innovative solutions. With experience in full-stack development, I specialize in creating web applications using React, Node.js, and Python. I focus on writing clean, maintainable code and continuously learning through personal projects and open-source contributions. I also enjoy mentoring aspiring developers and staying active in the tech community. I'm always looking for new challenges where I can make a meaningful impact by improving digital experiences.</p>
        </div>

        {/*creating github and linkedIn buttons*/}
        <div style={styles.linksContainer}>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <img src="/images/gitLogo.png" alt="GitHub" style={styles.icon} />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedinLogo.png" alt="LinkedIn" style={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeView;




