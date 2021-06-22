import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classnames from 'classnames';
import DetailsBtn from '../DetailButton';
import s from './styles.module.scss';

const ProjectListing = ({ project, className }) => (
  <section className={classnames(s.project, className)}>
    <h2>
      <Link className={s.projectTitle} to={`/${project.route}`}>{project.name}</Link>
    </h2>
    <h3>{project.headline}</h3>
    <p>{project.description}</p>
    <div className={s.tags}>
      {project.tags.map((tag) => (
        <span className={s.tag} key={tag}>
          {tag}
        </span>
      ))}
    </div>
    <DetailsBtn text="View on" href={project.repo} />
  </section>
);

ProjectListing.propTypes = {
  project: PropTypes.shape({
    route: PropTypes.string,
    name: PropTypes.string,
    headline: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    repo: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

export default ProjectListing;
