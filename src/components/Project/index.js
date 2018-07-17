import React from 'react';
import PropTypes from 'prop-types';
import DetailsBtn from '../ProjectDetailButton';
import image from '../../images/evade-graphic.png';
import s from './styles.module.scss';

const Project = ({ project }) => (
  <article className={s.project}>
    <aside className={s.image}>
      <img src={image} />
    </aside>
    <div className={s.content}>
      <h2>{project.name}</h2>
      <h3>{project.headline}</h3>
      <p>{project.description}</p>
      <DetailsBtn text="View on GitHub" />
    </div>
  </article>
);

Project.propTypes = {
  project: PropTypes.object,
};

export default Project;
