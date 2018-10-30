import React from 'react';
import classnames from 'classnames';
import CloudinaryImage from '../CloudinaryImage';

import s from './styles.module.scss';

const LogoBlack = ({ className }) => (
  <div className={classnames(s.logoContainerBlack, className)}>
    <CloudinaryImage filename="logo-black.svg" className={s.logoBlack} alt="Modus Labs" />
  </div>
);

export default LogoBlack;
