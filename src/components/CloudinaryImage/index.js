import React from 'react';
import PropTypes from 'prop-types';

export const url = 'https://res.cloudinary.com/modus-labs/image/upload/';
export const version = 'v1535719797';
export const folder = 'labs';

const defaultFilters = ['q_auto', 'f_auto'];

export const isSvg = (name) => name && !!name.match(/svg$/);

const getFilters = (filters = []) => {
  const strFilters = filters ? filters.join(',') : null;
  return strFilters ? `${strFilters}/` : '';
};

// concatenate one source
export const getSrc = (filename, filters, path = folder, dpr) => `${url}${getFilters(filters)}${version}/${path}/${filename}${dpr ? ` ${dpr}x` : ''}`;

// generate srcset
export const getSrcSet = (...args) => [1, 2].map((dpr) => getSrc(...args, dpr)).join(',');

const CloudinaryImage = ({
  filename,
  filters = defaultFilters,
  path = folder,
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

CloudinaryImage.propTypes = {
  filename: PropTypes.string,
  filters: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  path: PropTypes.string,
  vector: PropTypes.string,
};

export default CloudinaryImage;
