import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { getSrc, getSrcSet, isSvg } from '../CloudinaryImage';
import s from './styles.module.scss';

const canUseDOM = !!(
  typeof window !== 'undefined'
  && window.document
  && window.document.createElement
);

let lazySizes = null;

if (canUseDOM) {
  /* eslint-disable global-require */
  lazySizes = require('lazysizes');
  window.lazySizesConfig = window.lazySizesConfig || {};
  window.lazySizesConfig.customMedia = {
    '--small': '(max-width: 30rem)',
    '--medium': '(max-width: 48rem)',
    '--large': '(min-width: 48.001rem)',
  };
}

const LazyImage = ({ filename, className = '', ...rest }) => {
  const [isVector] = React.useState(isSvg(filename));
  const el = React.useRef(null);

  React.useEffect(() => {
    if (!lazySizes || !el) {
      return;
    }

    if (!lazySizes.hC(el.current, 'lazyloaded') && !lazySizes.hC(el.current, 'lazyload')) {
      lazySizes.aC(el.current, 'lazyload');
    }
  }, []);

  const src = isVector
    ? {
      src: getSrc(filename, []),
      className: cx(s.img, className),
    }
    : {
      src: getSrc(filename, ['q_1', 'e_blur:1000', 'f_auto']),
      'data-srcset': getSrcSet(filename, ['q_auto', 'f_auto'], undefined),
      className: cx(s.img, className, 'lazyload'),
    };

  return (
    <img
      ref={el}
      alt="Modus Labs"
      {...rest}
      {...src}
    />
  );
};

LazyImage.propTypes = {
  filename: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LazyImage;
