import React from 'react';

const GalleryItem = ({ server, id, secret} ) => {
  return (
    <li>
      <img alt="" src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`}/>
    </li>
  );
}

export default GalleryItem;