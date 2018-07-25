import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'gatsby';
import CloudinaryImage from '../../CloudinaryImage';
import arrow from '../../../images/arrow.svg';

import s from './styles.module.scss';

const ProjectDetailButton = ({ text, className, href, ...rest }) => (
  <Link className={classnames(s.btn, className)} href={href} {...rest}>
    {text}
    <CloudinaryImage id="github" className={s.github} alt="GitHub" />
    <CloudinaryImage id="arrow" className={s.arrow} alt={text} />
  </Link>
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
