import React from 'react';
import Image from '../../LazyImage';
import ProjectDetailButtonChild from '../DetailButton';
import s from './styles.module.scss';

const ProjectSummaryInfo = ({ project }) => {
  return (
    <article className={s.header}>
      <div className={s.content}>
        <h1>{project.name}</h1>
        <h3>{project.headline}</h3>
        <ProjectDetailButtonChild text="View on" href={project.repo} />
      </div>
      <aside className={s.image}>
        {project['image'] ? <Image filename={project.image} alt={project.name} /> : null}
      </aside>
    </article>
  );
};

export default ProjectSummaryInfo;
