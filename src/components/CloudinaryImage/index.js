import React from 'react';

export const cloudinaryUrlPrefix = 'https://res.cloudinary.com/modus-labs/image/upload/';

const CloudinaryImage = ({ id, ...rest }) => (
  <img src={`${cloudinaryUrlPrefix}labs/${id}`} alt="Modus Labs" {...rest} />
);

export default CloudinaryImage;
