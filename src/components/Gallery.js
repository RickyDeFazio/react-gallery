import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = (props) => {
  
  const galleryItemComponents = props.photos.map((photo, i) => {
    return (
      <GalleryItem 
        key={photo.id}
        id={photo.id}
        server={photo.server} 
        secret={photo.secret} 
      /> );
  });
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {galleryItemComponents}
        
        {/* <NotFound /> */}
      </ul>
    </div>

  )
}

export default Gallery;