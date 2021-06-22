import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import s from './styles.module.scss';

const PrimaryButton = ({
  text, className, href, ...rest
}) => (
  <a className={classnames(s.cta, className)} href={href} {...rest}>
    {text}
  </a>
);

PrimaryButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

PrimaryButton.defaultProps = {
  className: undefined,
};

export default PrimaryButton;
