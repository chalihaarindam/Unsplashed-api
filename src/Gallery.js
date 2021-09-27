import React from 'react';
import './Gallery.css';

function Gallery({image}) {
    return (
        <div className="gallery">
            <img src={image} alt="not available"/>
        </div>
    )
}

export default Gallery;
