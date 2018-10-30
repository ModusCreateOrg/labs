import React from 'react';
import Image from '../components/LazyImage';
import ProjectDetailButtonChild from '../components/project/DetailButton/DetailButtonChild';
import s from './styles.module.scss';

const ProjectSummaryInfo = props => {
  return (
    <article className={s.header}>
      <div className={s.content}>
        <h1>{props.project.name}</h1>
        <h3>{props.project.headline}</h3>
        <ProjectDetailButtonChild text="View on" href={props.project.repo} />
      </div>
      <aside className={s.image}>
        {props.project['image'] ? (
          <Image filename={props.project.image} alt={props.project.name} />
        ) : null}
      </aside>
    </article>
  );
};

export default ProjectSummaryInfo;
