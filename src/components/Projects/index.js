import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

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
        <div>Projects</div>
        {data.allProjectsJson.edges.map(({ node: project }) => (
          <article key={project.name}>
            <h2>{project.name}</h2>
            <h3>{project.headline}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </>
    )}
  />
)

Projects.propTypes = {
  data: PropTypes.object,
}

export default Projects
