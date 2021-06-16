import React from 'react';
import PropTypes from 'prop-types';
import s from './styles.module.scss';

import Image from '../../LazyImage';

const DescriptionBlocks = ({ project }) => (project.content ? (
  <section>
    {Array.from(project.content).map((block, idx) => (
      <div key={idx}>
        {block.title ? <h3 className={s.title}>{block.title}</h3> : null}
        {block.description ? (
          <p className={s.description} dangerouslySetInnerHTML={{ __html: block.description }} />
        ) : null}
        {block.screenshots ? (
          <div className={s.screenshotsContainer}>
            {block.screenshots.map((shot, index) => (
              <div className={s.screenshots} key={`screen_${index}`}>
                <Image filename={shot.screen} alt={project.name} className={s.screenshotImage} />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    ))}
  </section>
) : null);

DescriptionBlocks.propTypes = {
  project: PropTypes.shape({
    description: PropTypes.string,
    name: PropTypes.string,
    content: PropTypes.shape([]),
    stack: PropTypes.shape([]),
  }),
};

export default DescriptionBlocks;
