import React from 'react';
import classnames from 'classnames';
import { AnimatedLogo } from './AnimatedLogo';

import s from './styles.module.scss';

const LogoBlack = ({ className }) => (
  <div className={classnames(s.logoContainerBlack, className)}>
    <AnimatedLogo />
  </div>
);

export default LogoBlack;
