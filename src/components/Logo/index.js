import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import CloudinaryImage from '../CloudinaryImage';

import s from './styles.module.scss';

const Logo = ({ className }) => (
  <span className={classnames(s.logoContainer, className)}>
    <CloudinaryImage filename="Modus-Labs-Logo-Long-White.svg" className={s.logo} alt="Modus Labs" />
  </span>
);

Logo.propTypes = {
  className: PropTypes.string,
};
export default Logo;
