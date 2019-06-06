import React from 'react';
import GalleryItem from './GalleryItem';
import NotFound from './NotFound';

const Gallery = ({ photos, query }) => {
  const results = photos;
  let galleryItemComponents;
  if (results.length > 0) {
    galleryItemComponents = results.map((photo, i) => {
      return (
        <GalleryItem 
          key={photo.id}
          id={photo.id}
          server={photo.server} 
          secret={photo.secret} 
        /> );
    });

  } else {
    galleryItemComponents = <NotFound />
  }
  
  return (
    <div className="photo-container">
      <h3 className="title">{results.length > 0 ? query.toUpperCase() : null}</h3>
      <ul>
        {galleryItemComponents}
      </ul>
    </div>
  )
}

export default Gallery;