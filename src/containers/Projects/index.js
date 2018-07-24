import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import ProjectFeatured from '../../components/project/Featured';
import ProjectListing from '../../components/project/Listing';
import s from './styles.module.scss';

const Projects = ({ data }) => (
  <StaticQuery
    query={graphql`
      query ProjectListQuery {
        allProjectsJson {
          edges {
            node {
              name
              description
              headline
              stack
              tags
              repo
              team {
                name
                twitter
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <section className={s.featured}>
          {data.allProjectsJson.edges.map(({ node }) => (
            <ProjectFeatured key={node.name} project={node} />
          ))}
        </section>
        <h1>More Labs</h1>
        <section className={s.list}>
          {data.allProjectsJson.edges.map(({ node }) => (
            <ProjectListing key={node.name} project={node} />
          ))}
        </section>
      </>
    )}
  />
);

Projects.propTypes = {
  data: PropTypes.object,
};

export default Projects;
