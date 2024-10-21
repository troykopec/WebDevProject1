import React from 'react';
import './GallerySection.css';

function GallerySection({ images, onGalleryClick }) {
  return (
    <div className="gallery-section">
      <h4 style={{ paddingBottom: '6px' }}>View Gallery</h4>
      <div className="gallery-icons">
        {images.slice(0, 4).map((image, index) => (
          <img
            src={image}
            key={index}
            alt={`Gallery ${index + 1}`}
            className="gallery-icon"
            onClick={() => onGalleryClick(images)}
          />
        ))}
      </div>
    </div>
  );
}

export default GallerySection;
