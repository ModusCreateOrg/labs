import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { FormattedMessage } from 'gatsby-plugin-intl';

import ProjectFeatured from '../../components/project/Featured';
import ProjectListing from '../../components/project/Listing';
import s from './styles.module.scss';

const Projects = () => (
  <StaticQuery
    query={graphql`
      query ProjectListingQuery {
        featured: allProjectsJson(
          sort: { fields: [weight], order: DESC }
          filter: { featured: { eq: true } }
        ) {
          edges {
            node {
              ...ProjectFields
            }
          }
        }
        listing: allProjectsJson(
          sort: { fields: [weight], order: DESC }
          filter: { featured: { ne: true } }
        ) {
          edges {
            node {
              ...ProjectFields
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <section className={s.featured}>
          {data.featured.edges.map(({ node }) => (
            <ProjectFeatured key={node.name} project={node} />
          ))}
        </section>
        <strong className={s.heading__main}><FormattedMessage id="projects.title" /></strong>
        <section className={s.list}>
          {data.listing
            && data.listing.edges.map(({ node }) => (
              <ProjectListing key={node.name} project={node} className={s.listItem} />
            ))}
        </section>
      </>
    )}
  />
);

export default Projects;
