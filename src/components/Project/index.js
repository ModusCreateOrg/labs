import React from 'react';
import PropTypes from 'prop-types';
import DetailsBtn from '../ProjectDetailButton';

const Project = ({ project }) => (
  <article>
    <h2>{project.name}</h2>
    <h3>{project.headline}</h3>
    <p>{project.description}</p>
    <DetailsBtn text="View on GitHub" />
  </article>
);

Project.propTypes = {
  project: PropTypes.object,
};

export default Project;
