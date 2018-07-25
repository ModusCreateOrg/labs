import React from 'react';
import PropTypes from 'prop-types';
import DetailsBtn from '../DetailButton';
import CloudinaryImage from '../../CloudinaryImage';
import s from './styles.module.scss';

const ProjectFeatured = ({ project }) => (
  <article className={s.project}>
    <aside className={s.image}>
      {project.image ? <CloudinaryImage id={project.image} alt={project.name} /> : null}
    </aside>
    <div className={s.content}>
      <h2>{project.name}</h2>
      <h3>{project.headline}</h3>
      <p>{project.description}</p>
      <DetailsBtn text="View on" />
    </div>
  </article>
);

ProjectFeatured.propTypes = {
  project: PropTypes.object,
};

export default ProjectFeatured;
