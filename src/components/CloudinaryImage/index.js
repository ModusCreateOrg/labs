import React from 'react';
import { Image } from 'cloudinary-react';

const CloudinaryImage = ({ id, ...rest }) => (
  <Image cloudName="modus-labs" publicId={`labs/${id}`} {...rest} />
);

export default CloudinaryImage;

export const cloudinaryUrlPrefix = 'https://res.cloudinary.com/modus-labs/image/upload/';
