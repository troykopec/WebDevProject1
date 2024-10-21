import React from 'react';
import ReactDOM from 'react-dom';
import './ExpandableGallery.css';

function FullscreenModal({ image, onClose }) {
  if (!image) return null;

  // Create an Image object to calculate the natural aspect ratio
  const img = new Image();
  img.src = image;
  const aspectRatio = img.width / img.height;

  // Calculate the width and height based on the aspect ratio and viewport size
  const maxWidth = window.innerWidth * 0.8;
  const maxHeight = window.innerHeight * 0.8;
  let width = maxWidth;
  let height = maxWidth / aspectRatio;

  // If the calculated height exceeds the maximum height, adjust the dimensions
  if (height > maxHeight) {
    height = maxHeight;
    width = maxHeight * aspectRatio;
  }

  return ReactDOM.createPortal(
    <div className="fullscreen-modal-overlay" onClick={onClose}>
      <div className="fullscreen-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-fullscreen-modal-button" onClick={onClose}>X</button>
        <img
          src={image}
          alt="Enlarged view"
          style={{
            width: `${width}px`,  // Set the calculated width
            height: `${height}px` // Set the calculated height
          }}
        />
      </div>
    </div>,
    document.body,
  );
}

export default FullscreenModal;
