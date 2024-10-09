import React, { useState } from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import ExpandableGallery from './ProjectCard/ExpandableGallery/ExpandableGallery';
import projectCardInfoList from './ProjectCardInfo'; // Import the project card data

function ProjectView() {
  const [expandedGallery, setExpandedGallery] = useState(null);

  const handleGalleryClick = (images) => {
    setExpandedGallery(images);
  };

  const handleCloseGallery = () => {
    setExpandedGallery(null);
  };

  return (
    <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px 0' }}>
      <div style={{ width: '80%', maxWidth: '1200px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>My Projects</h2>
        {projectCardInfoList.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard project={project} onGalleryClick={handleGalleryClick} />
            {expandedGallery === project.galleryImages && (
              <ExpandableGallery images={expandedGallery} onClose={handleCloseGallery} />
            )}
            {/* Spacer between project cards */}
            <div style={{ height: '50px' }}></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default ProjectView;
