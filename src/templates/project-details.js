import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Layout from '../components/Layout';
import Image from '../components/Image';
import CloudinaryImage from '../components/CloudinaryImage';
import s from './styles.module.scss';

const GithubButton = ({ text, className, href, ...rest }) => (
  <a className={classnames(s.btn, className)} href={href} {...rest}>
    {text}
    <CloudinaryImage id="github" className={s.github} alt="GitHub" />
    <CloudinaryImage id="arrow" className={s.arrow} alt={text} />
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

        <article className={s.overview}>
          <div className={s.overview_content}>
            <h1>Project Overview</h1>
            <div>{project.description}</div>
          </div>
          <div className={s.data}>
            <div className={s.stack}>
              <h2>Technology</h2>
              <ul>
                {project.stack.map(s => (
                  <li>{s}</li>
                ))}
              </ul>
            </div>
            <div className={s.tags}>
              <h2>Tags</h2>
              <ul>
                {project.tags.map(t => (
                  <li>{t}</li>
                ))}
              </ul>
            </div>
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
