import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import DetailsBtn from '../DetailButton';
import Image from '../../LazyImage';
import s from './styles.module.scss';

const ProjectFeatured = ({ project }) => (
  <article className={s.project}>
    <aside className={s.image}>
      {project.image ? <Image filename={project.image} alt={project.name} /> : null}
    </aside>
    <div className={s.content}>
      <h2>
        <Link to={`/${project.route}`}>{project.name}</Link>
      </h2>
      <h3>{project.headline}</h3>
      <p>{project.description}</p>
      <DetailsBtn text="View on" href={project.repo} />
    </div>
  </article>
);

ProjectFeatured.propTypes = {
  project: PropTypes.object,
};

export default ProjectFeatured;
