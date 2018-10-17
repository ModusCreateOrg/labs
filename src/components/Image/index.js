import React from 'react';
import LazyLoad from 'react-lazyload';
import { cloudinaryUrlPrefix } from '../CloudinaryImage';

const toWebp = path => path.replace(/\.\w{3,4}$/, '.webp');
const Image = ({ filename, ...rest }) => {
  const webpFilename = toWebp(filename);

  return (
    <LazyLoad
      height={200}
      offset={100}
      placeholder={
        <img
          height={200}
          src={`${cloudinaryUrlPrefix}q_30,w_10/labs/${webpFilename}`}
          alt="Modus Labs"
          {...rest}
        />
      }
    >
      <picture>
        <source
          media="(min-width: 64rem)"
          srcSet={`${cloudinaryUrlPrefix}q_70,w_180/labs/${webpFilename} 180w,
            ${cloudinaryUrlPrefix}q_70,w_360/labs/${webpFilename} 2x`}
          sizes="200px"
          type="image/webp"
        />

        <source
          media="(min-width: 64rem)"
          srcSet={`${cloudinaryUrlPrefix}q_70,w_180/labs/${filename} 180w,
            ${cloudinaryUrlPrefix}q_70,w_360/labs/${filename} 2x`}
          sizes="200px"
          type="image/png"
        />

        <img
          srcSet={`${cloudinaryUrlPrefix}f_auto,q_70,w_200/labs/${filename} 200w,
            ${cloudinaryUrlPrefix}f_auto,q_70,w_400/labs/${filename} 2x`}
          src={`${cloudinaryUrlPrefix}f_auto,q_70,w_200/labs/${filename}`}
          sizes="200px"
          alt="Modus Labs"
          {...rest}
        />
      </picture>
    </LazyLoad>
  );
};

export default Image;
