import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CloudinaryImage from '../../CloudinaryImage';

import s from './styles.module.scss';

const TwitterButton = ({ text, className, href }) => (
  <CloudinaryImage id="twitter" filename="twitter.svg" href={href} filters={[]} className={classnames(s.twitterIcon, className)} alt={text} />
);

TwitterButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
};

TwitterButton.defaultProps = {
  className: undefined,
};

export default TwitterButton;
