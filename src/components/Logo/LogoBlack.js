import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { AnimatedLogo } from './AnimatedLogo';

import s from './styles.module.scss';

const LogoBlack = ({ className }) => (
  <div className={classnames(s.logoContainerBlack, className)}>
    <AnimatedLogo />
  </div>
);

LogoBlack.propTypes = {
  className: PropTypes.string,
};

export default LogoBlack;
