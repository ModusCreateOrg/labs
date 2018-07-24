import React from 'react';
import PropTypes from 'prop-types';
import DetailsBtn from '../DetailButton';
import image from '../../../images/evade-graphic.png';
import s from './styles.module.scss';

const ProjectListing = ({ project }) => (
  <article className={s.project}>
    <h2>{project.name}</h2>
    <h3>{project.headline}</h3>
    <p>{project.description}</p>
    <DetailsBtn text="View on GitHub" />
  </article>
);

ProjectListing.propTypes = {
  project: PropTypes.object,
};

export default ProjectListing;
