import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Project from '../../components/Project';

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
    render={data => <>{data.allProjectsJson.edges.map(({ node }) => <Project key={node.name} project={node} />)}</>}
  />
);

Projects.propTypes = {
  data: PropTypes.object,
};

export default Projects;
