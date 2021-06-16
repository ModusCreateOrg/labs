import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import DetailsBtn from '../DetailButton';
import Image from '../../LazyImage';
import s from './styles.module.scss';

const ProjectFeatured = ({ project }) => (
  <article className={s.project}>
    <aside className={s.image}>
      {project.image ? (
        <Link to={`/${project.route}`}>
          <Image filename={project.image} alt={project.name} />
        </Link>
      ) : null}
    </aside>
    <div className={s.content}>
      <h2>
        <Link className={s.projectTitle} to={`/${project.route}`}>{project.name}</Link>
      </h2>
      <h3>{project.headline}</h3>
      <p>{project.description}</p>
      <DetailsBtn text="View on" href={project.repo} />
    </div>
  </article>
);

ProjectFeatured.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    route: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    repo: PropTypes.string,
    headline: PropTypes.string,
  }).isRequired,
};

export default ProjectFeatured;
