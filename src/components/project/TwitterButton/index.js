import React from 'react';
import PropTypes from 'prop-types';
import CloudinaryImage from '../../CloudinaryImage';

import s from './styles.module.scss';

const TwitterButton = ({ text, className, href}) => (
    <CloudinaryImage id="twitter" filename="twitter.svg" filters={[]} className={s.twitterIcon} alt={text} />
);

TwitterButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

TwitterButton.defaultProps = {
  className: undefined,
};

export default TwitterButton;
