import React from 'react';
import GalleryItem from './GalleryItem';
import NotFound from './NotFound';
import {Consumer} from './Context';

const Gallery = (props) => {
  const results = props.photos;

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
    <Consumer>
      {context => (
        <div className="photo-container">
          <h3 className="title">{results.length > 0 ? context.query.toUpperCase() : null}</h3>
          <ul>
            {galleryItemComponents}
          </ul>
        </div>
      )}
    </Consumer>
  )
}

export default Gallery;