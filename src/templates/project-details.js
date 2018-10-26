import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Layout from '../components/Layout';
import Image from '../components/LazyImage'
import ProjectDetailButtonChild from '../components/project/DetailButtonChild';
import TwitterButton from '../components/project/TwitterButton';
import s from './styles.module.scss';

const DetailsPage = ({ pageContext: { project } }) => {
  return (
    <Layout>
      <section>
        <article className={s.header}>
          <div className={s.content}>
            <h1>{project.name}</h1>
            <h3>{project.headline}</h3>
            <ProjectDetailButtonChild text="View on" href={project.repo} />
          </div>
          <aside className={s.image}>
            {project.image ? <Image filename={project.image} alt={project.name} /> : null}
          </aside>
        </article>

        <article className={classnames(s.overview, s.contentContainer)}>
          <div className={classnames(s.overview_content, s.main)}>
            <h3 className={s.titleProps}>Project Overview</h3>
            <div className={s.projectDescription}>{project.description}</div>
          </div>
          <div className={classnames(s.data, s.side)}>
            <div className={s.stack}>
              <h2 className={s.subTitle}>Technology</h2>
              {project.stack.map((stacks, index) => {
                return <span key={`teck_stacks_${index}`} className={s.technologyContent}> {(index ? ', ' : '') + stacks} </span>
              })
              }
            </div>
            <div className={s.tagsSection}>
              <h2 className={s.subTitle}>Tags</h2>
              {project.tags.map((tag, index) => (
                <div className={s.tagsParent} key={`tag_index${index}`}>
                  <div className={s.tagsChild}>{tag}</div>
                </div>
              ))}
            </div>
          </div>
        </article>

        <article className={s.otherContentContainer}>
          <h3 className={classnames(s.titleProps, s.teamHeading)}>{project.title}</h3>
          <div className={s.screenshotsContainer}>
            {project.screenshots.map((shot, index) => (
              <div className={s.screenshots} key={`screen_${index}`}>
                <img src={shot.screen} className={s.screenshotImage} alt="MC" />
              </div>
            )
            )}
          </div>
        </article>

        <article className={s.otherContentContainer}>
          <h3 className={classnames(s.titleProps, s.teamHeading)}>Team</h3>
          <div className={s.team}>
            {project.team.map((t, index) => {
              return (
                <div className={s.member} key={`memberName${index}`}>
                  <img className={s.teamAvatar} src={`https://avatars.io/twitter/` + t.twitter} alt={t.name} />
                  <div className={s.memberDetails}>
                    <span className={classnames(s.titleProps, s.memberName)}>{t.name}</span>
                    <br /><a href={`https://twitter.com/` + t.twitter}>
                      <span className={s.twitterButton}>
                        @{t.twitter}      <TwitterButton text={t.twitter} />
                      </span>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </article>
      </section>
    </Layout>
  );
};

DetailsPage.propTypes = {
  pageContext: PropTypes.shape({
    project: PropTypes.shape({
      description: PropTypes.string,
      featured: PropTypes.bool,
      headline: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string,
      repo: PropTypes.string,
      stack: PropTypes.arrayOf(PropTypes.string),
      tags: PropTypes.arrayOf(PropTypes.string),
      team: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          twitter: PropTypes.twitter,
        })
      ),
    }),
  }),
};
export default DetailsPage;