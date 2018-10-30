import React from 'react';
import classnames from 'classnames';
import s from './styles.module.scss';
import Image from '../components/LazyImage';

const Snapshots = props => {
  return (
    <article className={s.otherContentContainer}>
      <h3 className={classnames(s.titleProps, s.teamHeading)}>{props.project.title}</h3>
      <div className={s.screenshotsContainer}>
        {props.project['screenshots']
          ? props.project.screenshots.map((shot, index) => (
              <div className={s.screenshots} key={`screen_${index}`}>
                <Image
                  filename={shot.screen}
                  alt={props.project.name}
                  className={s.screenshotImage}
                />
              </div>
            ))
          : null}
      </div>
    </article>
  );
};

export default Snapshots;
