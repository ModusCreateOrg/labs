import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import s from './styles.module.scss';

const ContactButton = ({ text, className, href, ...rest }) => (
  <a className={classnames(s.cta, className)} href={href} {...rest}>
    {text}
  </a>
);

ContactButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ContactButton.defaultProps = {
  className: undefined,
};

export default ContactButton;
