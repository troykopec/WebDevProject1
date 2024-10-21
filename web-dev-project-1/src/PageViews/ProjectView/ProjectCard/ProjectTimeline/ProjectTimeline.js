import React from 'react';
import './ProjectTimeline.css';

function ProjectTimeline({ startDate, endDate }) {
  return (
    <div className="project-timeline">
      <h4>Project Timeline</h4>
      <div className="parent-container">
        <p className="timeline-dates">{startDate} - {endDate}</p>
      </div>
    </div>
  );
}

export default ProjectTimeline;
