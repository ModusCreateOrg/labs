import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DetailsBtn from '../DetailButton';
import s from './styles.module.scss';

const ProjectListing = ({ project, className }) => (
  <article className={classnames(s.project, className)}>
    <h2>{project.name}</h2>
    <h3>{project.headline}</h3>
    <p>{project.description}</p>
    <div className={s.tags}>
      {project.tags.map(tag => (
        <span className={s.tag} key={tag}>
          {tag}
        </span>
      ))}
    </div>
    <DetailsBtn text="View on" href={project.repo} />
  </article>
);

ProjectListing.propTypes = {
  project: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default ProjectListing;
