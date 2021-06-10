import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CloudinaryImage from '../../CloudinaryImage';

import s from './styles.module.scss';

const ProjectDetailButton = ({ text, className, href, child = false, ...rest }) => (
  <a className={classnames(child ? s.btnChild : s.btn, className)} href={href} {...rest}>
    {text}
    <CloudinaryImage filename="github.svg" filters={[]} className={classnames(child ? s.githubChild : s.github)} alt="GitHub" />
    <CloudinaryImage filename="arrow.svg" filters={[]} className={classnames(child ? s.arrowChild : s.arrow)} alt={text} />
  </a>
);

ProjectDetailButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  child: PropTypes.bool,
  className: PropTypes.string,
};

export default ProjectDetailButton;
