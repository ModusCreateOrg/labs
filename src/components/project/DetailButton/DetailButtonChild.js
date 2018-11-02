import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CloudinaryImage from '../../CloudinaryImage';

import s from './styles.module.scss';

const ProjectDetailButtonChild = ({ text, className, href, ...rest }) => (
  <a className={classnames(s.btnChild, className)} href={href} {...rest}>
    {text}
    <CloudinaryImage filename="github.svg" filters={[]} className={s.githubChild} alt="GitHub" />
    <CloudinaryImage filename="arrow.svg" filters={[]} className={s.arrowChild} alt={text} />
  </a>
);

ProjectDetailButtonChild.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ProjectDetailButtonChild;
