import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Layout from '../components/Layout';
import Image from '../components/LazyImage'
import CloudinaryImage from '../components/CloudinaryImage';
import s from './styles.module.scss';


const GithubButton = ({ text, className, href, ...rest }) => (
  <a className={classnames(s.btn, className)} href={href} {...rest}>
    {text}
    <CloudinaryImage id="github" filename="github.svg" filters={[]} className={s.github} alt="GitHub" />
    <CloudinaryImage id="arrow" filename="arrow.svg" filters={[]} className={s.arrow} alt={text} />
  </a>
);

const TwitterButton = ({ text, className, href, ...rest }) => (
  <a href={href} {...rest}>
    <CloudinaryImage id="twitter" filename="twitter.svg" filters={[]} className={s.twitter_icon} alt="twitter" />
  </a>
);


const DetailsPage = ({ pageContext: { project } }) => {
  return (
    <Layout>
      <section>
        <article className={s.header}>
          <div className={s.content}>
            <h1>{project.name}</h1>
            <h3>{project.headline}</h3>
            <GithubButton text="View on" href={project.repo} />
          </div>
          <aside className={s.image}>
            {project.image ? <Image filename={project.image} alt={project.name} /> : null}
          </aside>
        </article>

        <article className={classnames(s.overview, s.content_container)}>
          <div className={classnames(s.overview_content, s.main)}>
            <h3 className={s.title_props}>Project Overview</h3>
            <div className={s.project_description}>{project.description}</div>
          </div>
          <div className={classnames(s.data, s.side)}>
            <div className={s.stack}>
              <h2 className={s.sub_title}>Technology</h2>
              {project.stack.map((stacks, index) => {
                return <span key={`teck_stacks_${index}`} className={s.technology_content}> {(index ? ', ' : '') + stacks} </span>
              })
              }
            </div>
            <div className={s.tags_section}>
              <h2 className={s.sub_title}>Tags</h2>
              {project.tags.map((tag, index) => (
                <div className={s.tags_parent} key={`tag_index${index}`}>
                  <div className={s.tags_child}>{tag}</div>
                </div>
              ))}
            </div>
          </div>
        </article>
        <article className={s.other_content_container}>
          <h2 className={classnames(s.team_heading)}>Team</h2>
          <div className={classnames(s.team)}>
            {project.team.map((t, index) => {
              return (
                <div className={classnames(s.member)} key={`member_name${index}`}>
                  <img className={s.team_avatar} src={`https://avatars.io/twitter/` + t.twitter} />
                  <div className={s.member_details}>
                    <span className={classnames(s.title_props, s.member_name)}>{t.name}</span>
                    <br /><a href={`https://twitter.com/` + t.twitter}>
                      <span className={classnames(s.twitter_button)}>
                        {/* @{t.twitter} <img src={require('../images/twitter-temp.png')} alt="t" className={s.twitter_icon} /> */}
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