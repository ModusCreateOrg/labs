import React from 'react';
import Image from '../../LazyImage';
import DetailButton from '../DetailButton';
import s from './styles.module.scss';

const ProjectSummaryInfo = ({ project }) => {
  return (
    <header className={s.header}>
      <div className={s.content}>
        <h1>{project.name}</h1>
        <h3>{project.headline}</h3>
        <DetailButton text="View on" href={project.repo} />
      </div>
      {project['image'] ?
        <div className={s.image}>
          <Image filename={project.image} alt={project.name} />
        </div>
      : null}
    </header>
  );
};

export default ProjectSummaryInfo;
