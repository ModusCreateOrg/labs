import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CloudinaryImage from '../../CloudinaryImage';

import s from './styles.module.scss';

const ProjectDetailButton = ({ text, className, href, ...rest }) => (
  <a className={classnames(s.btn, className)} href={href} {...rest}>
    {text}
    <CloudinaryImage id="github" className={s.github} alt="GitHub" />
    <CloudinaryImage id="arrow" className={s.arrow} alt={text} />
  </a>
);

ProjectDetailButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ProjectDetailButton.defaultProps = {
  className: undefined,
};

export default ProjectDetailButton;
