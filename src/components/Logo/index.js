import React from 'react';
import classnames from 'classnames';
import CloudinaryImage from '../CloudinaryImage';

import s from './styles.module.scss';

const Logo = ({ className }) => (
  <div className={classnames(s.logoContainer, className)}>
    <CloudinaryImage id="Modus-Labs-Logo-Long-White.svg" className={s.logo} alt="Modus Labs" />
  </div>
);

export default Logo;
