import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../LazyImage';
import DetailButton from '../DetailButton';
import s from './styles.module.scss';

const ProjectSummaryInfo = ({ project }) => (
  <header className={s.header}>
    <div className={s.content}>
      <h1>{project.name}</h1>
      <h3>{project.headline}</h3>
      <DetailButton text="View on" href={project.repo} />
    </div>
    {project.image ? (
      <div className={s.image}>
        <Image filename={project.image} alt={project.name} />
      </div>
    )
      : null}
  </header>
);

ProjectSummaryInfo.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    repo: PropTypes.string,
    headline: PropTypes.string,
  }),
};

export default ProjectSummaryInfo;
