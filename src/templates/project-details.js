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
    <CloudinaryImage id="arrow"  filename="arrow.svg" filters={[]}  className={s.arrow} alt={text} />
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

        <article className={s.overview} className={s.content_container}>
          <div classNames={s.overview_content} className={s.main}>
            <h3 className={s.content_titles}>Project Overview</h3>
            <div className={s.project_description}>{project.description}</div>
          </div>
          <div className={s.data} className={s.side}>
            <div className={s.stack}>
              <h3 className={s.content_titles}>Technology</h3>
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
