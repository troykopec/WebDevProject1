import React from 'react';
import ProjectHeader from './ProjectHeader/ProjectHeader';
import ProjectDescription from './ProjectDescription/ProjectDescription';
import TechnologiesUsed from './TechnologiesUsed/TechnologiesUsed';
import ProjectTimeline from './ProjectTimeline/ProjectTimeline';
import GallerySection from './GallerySection/GallerySection';
import './ProjectCard.css';

function ProjectCard({ project, onGalleryClick }) {
  return (
    <div className="project-card">
      <ProjectHeader project={project} />
      <ProjectDescription description={project.description} />
      <div className="project-details">
        <TechnologiesUsed technologies={project.technologiesUsed} />
        <ProjectTimeline startDate={project.projectTimeline.startDate} endDate={project.projectTimeline.endDate} />
        <GallerySection images={project.galleryImages} onGalleryClick={onGalleryClick} />
      </div>
    </div>
  );
}

export default ProjectCard;
