import React from 'react';

const defaultFilters = ['q_auto', 'f_auto'];

export const isSvg = name => name && !!name.match(/svg$/);

const getFilters = (filters = []) => {
  const strFilters = filters ? filters.join(',') : null;
  return strFilters ? `${strFilters}/` : '';
};

// concatenate one source
export const getSrc = (filename, filters, path, dpr) =>
  `${process.env.CLOUDINARY_URL}${getFilters(filters)}${process.env.CLOUDINARY_VERSION}/${path || process.env.CLOUDINARY_FOLDER}/${filename}${dpr ? ` ${dpr}x` : ''}`;

// generate srcset
export const getSrcSet = (...args) => [1, 2].map(dpr => getSrc(...args, dpr)).join(',');

export const CloudinaryImage = ({
  filename,
  filters = defaultFilters,
  path = process.env.CLOUDINARY_FOLDER,
  vector,
  ...rest
}) => (
    <img
      src={`${getSrc(filename, filters, path)}`}
      srcSet={isSvg(filename) || vector ? '' : getSrcSet(filename, filters, path)}
      alt="Modus Labs"
      {...rest}
    />
  );

export default CloudinaryImage;
