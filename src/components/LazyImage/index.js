import React from 'react';
import cx from 'classnames';
import { getSrc, getSrcSet, isSvg } from '../CloudinaryImage';
import s from './styles.module.scss';

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

let lazySizes = null;

if (canUseDOM) {
  lazySizes = require('lazysizes');
  window.lazySizesConfig = window.lazySizesConfig || {};
  window.lazySizesConfig.customMedia = {
    '--small': '(max-width: 30rem)',
    '--medium': '(max-width: 48rem)',
    '--large': '(min-width: 48.001rem)',
  };
}

class LazyImage extends React.Component {
  state = {
    isVector: isSvg(this.props.filename),
  };

  componentDidMount = () => {
    if (!lazySizes || !this.el) {
      return;
    }

    if (!lazySizes.hC(this.el, 'lazyloaded') && !lazySizes.hC(this.el, 'lazyload')) {
      lazySizes.aC(this.el, 'lazyload');
    }
  };

  render() {
    const { filename, className, ...rest } = this.props;

    const src = this.state.isVector
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
        ref={el => {
          this.el = el;
        }}
        alt="Modus Labs"
        {...rest}
        {...src}
      />
    );
  }
}

export default LazyImage;
