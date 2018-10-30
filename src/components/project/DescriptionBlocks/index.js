import React from 'react';
import s from './styles.module.scss';
import Image from '../../LazyImage';

const DescriptionBlocks = ({ project }) =>
  project.content ? (
    <>
      {Array.from(project.content).map((block, idx) => (
        <article className={s.otherContentContainer}>
          <h3 className={s.title}>{block.title}</h3>
          {block.description ? <p>{block.description}</p> : null}
          <div className={s.screenshotsContainer}>
            {block.screenshots
              ? block.screenshots.map((shot, index) => (
                  <div className={s.screenshots} key={`screen_${index}`}>
                    <Image
                      filename={shot.screen}
                      alt={project.name}
                      className={s.screenshotImage}
                    />
                  </div>
                ))
              : null}
          </div>
        </article>
      ))}
    </>
  ) : null;

export default DescriptionBlocks;
