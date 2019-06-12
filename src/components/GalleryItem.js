import React from 'react';
import PropTypes from 'prop-types';

const GalleryItem = ({ server, id, secret }) => {
  return (
    <li>
      <img alt="" src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`}/>
    </li>
  );
}

GalleryItem.propTypes = {
  server: PropTypes.string,
  id: PropTypes.string,
  secret: PropTypes.string
}

export default GalleryItem;