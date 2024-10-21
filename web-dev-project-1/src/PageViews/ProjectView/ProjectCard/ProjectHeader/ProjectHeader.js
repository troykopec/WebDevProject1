import React from 'react';
import github_icon from './images/25231.png';
import './ProjectHeader.css';

function ProjectHeader({ project }) {
  return (
    <div className="project-header">
      <h2>{project.projectName} - {project.className}</h2>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        <img src={github_icon} alt="GitHub" className="github-icon" />
      </a>
    </div>
  );
}

export default ProjectHeader;
