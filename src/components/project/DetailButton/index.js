import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CloudinaryImage from '../../CloudinaryImage';

import s from './styles.module.scss';

const ProjectDetailButton = ({
  text, className, href, child = false, ...rest
}) => (
  <a
    className={classnames({ [s.btnChild]: child }, { [s.btn]: !child }, className)}
    href={href}
    {...rest}
  >
    {text}
    <CloudinaryImage
      filename="github.svg"
      filters={[]}
      className={classnames({ [s.githubChild]: child }, { [s.github]: !child })}
      alt="GitHub"
    />
    <CloudinaryImage
      filename="arrow.svg"
      filters={[]}
      className={classnames({ [s.arrowChild]: child }, { [s.arrow]: !child })}
      alt={text}
    />
  </a>
);

ProjectDetailButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  child: PropTypes.bool,
  className: PropTypes.string,
};

export default ProjectDetailButton;
