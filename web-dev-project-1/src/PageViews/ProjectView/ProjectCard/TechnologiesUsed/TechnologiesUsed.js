import React, { useState } from 'react';
import './TechnologiesUsed.css';

function TechnologiesUsed({ technologies }) {
  const [showAllTech, setShowAllTech] = useState(false);

  const handleShowAllTech = () => {
    setShowAllTech(!showAllTech);
  };

  const displayedTechnologies = technologies.slice(0, 10);
  const hiddenTechCount = technologies.length - displayedTechnologies.length;

  return (
    <div className="technologies-used">
      <h4>Technologies Used</h4>
      <div className="technologies-container">
        {displayedTechnologies.map((tech, index) => (
          <div key={index} className="tech-item">
            <p className="small-text">- {tech}</p>
          </div>
        ))}
      </div>
      {hiddenTechCount > 0 && (
        <div className="more-tech" onClick={handleShowAllTech}>
          +{hiddenTechCount} more
        </div>
      )}
      {showAllTech && (
        <div className="popup-tech-container" onClick={handleShowAllTech}>
          <div className="popup-tech" onClick={(e) => e.stopPropagation()}>
            <h4>All Technologies Used</h4>
            {technologies.map((tech, index) => (
              <p key={index} className="popup-tech-item">- {tech}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TechnologiesUsed;
