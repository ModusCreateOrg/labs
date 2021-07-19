import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'gatsby-plugin-intl';

import s from './styles.module.scss';

const ProjectOverview = ({ project }) => (
  <section className={s.contentContainer}>
    <div className={s.main}>
      <h3 className={s.title}><FormattedMessage id="overview.title" /></h3>
      <div className={s.projectDescription}>{project.description}</div>
    </div>
    <div className={s.side}>
      <aside>
        <h2 className={s.subTitle}><FormattedMessage id="overview.subTitle1" /></h2>
        {project.stack.map((stacks, index) => (
          <span key={`teck_stacks_${index}`} className={s.technologyContent}>
            {stacks}
          </span>
        ))}
      </aside>
      <aside className={s.tagsSection}>
        <h2 className={s.subTitle}><FormattedMessage id="overview.subTitle2" /></h2>
        {project.tags.map((tag, index) => (
          <div className={s.tagsParent} key={`tag_index${index}`}>
            <div className={s.tagsChild}>{tag}</div>
          </div>
        ))}
      </aside>
    </div>
  </section>
);

ProjectOverview.propTypes = {
  project: PropTypes.shape({
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    stack: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default ProjectOverview;
