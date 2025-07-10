


import React, { useState } from 'react';
import './Gallery.css';

export default function Gallery() {
  const [images] = useState([
    "https://picsum.photos/id/1011/300/200",
    "https://picsum.photos/id/1012/300/200",
  ]);

  return (
    <>
      <h2>Image Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>
    </>
  );
}
