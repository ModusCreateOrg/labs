import React from 'react';
import s from './styles.module.scss';

const ProjectOverview = props => {
  return (
    <article className={s.contentContainer}>
      <div className={s.main}>
        <h3 className={s.titleProps}>Project Overview</h3>
        <div className={s.projectDescription}>{props.project.description}</div>
      </div>
      <aside className={s.side}>
        <div>
          <h2 className={s.subTitle}>Technology</h2>
          {props.project.stack.map((stacks, index) => (
              <span key={`teck_stacks_${index}`} className={s.technologyContent}>
                {stacks}
              </span>
            )
          )}
        </div>
        <div className={s.tagsSection}>
          <h2 className={s.subTitle}>Tags</h2>
          {props.project.tags.map((tag, index) => (
            <div className={s.tagsParent} key={`tag_index${index}`}>
              <div className={s.tagsChild}>{tag}</div>
            </div>
          ))}
        </div>
      </aside>
    </article>
  );
};

export default ProjectOverview;
