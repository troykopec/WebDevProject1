import React, { useState } from 'react';
import FullscreenModal from './FullScreenModal';
import './ExpandableGallery.css';

function ExpandableGallery({ images, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false); // Track if the gallery is closing

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
  };

  const handleCloseClick = () => {
    setIsClosing(true); // Start the close animation
    setTimeout(() => {
      onClose(); // Close the gallery after the animation completes
      setIsClosing(false); // Reset the state for the next time the gallery opens
    }, 500); // Duration of the slide-up animation
  };

  return (
    <>
      <div className={`expandable-gallery-container ${isClosing ? 'closing' : ''}`}>
        <button className="close-button" onClick={handleCloseClick}>Close</button>
        <div className={`expanded-gallery-images ${isClosing ? 'fade-out' : ''}`}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Expanded ${index + 1}`}
              className="expanded-gallery-image"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </div>

      {/* Render the full-screen modal separately */}
      <FullscreenModal image={selectedImage} onClose={handleModalClose} />
    </>
  );
}

export default ExpandableGallery;
