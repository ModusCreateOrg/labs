import React from 'react';
import s from './styles.module.scss';
import Image from '../../LazyImage';

const Snapshots = ({ project }) => (
  <article className={s.otherContentContainer}>
    <h3 className={s.title}>{project.title}</h3>
    <div className={s.screenshotsContainer}>
      {project['screenshots']
        ? project.screenshots.map((shot, index) => (
            <div className={s.screenshots} key={`screen_${index}`}>
              <Image filename={shot.screen} alt={project.name} className={s.screenshotImage} />
            </div>
          ))
        : null}
    </div>
  </article>
);

export default Snapshots;
