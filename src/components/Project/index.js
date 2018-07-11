import React from 'react'
import PropTypes from 'prop-types'

const Project = ({ project }) => (
  <article>
    <h2>{project.name}</h2>
    <h3>{project.headline}</h3>
    <p>{project.description}</p>
  </article>
)

Project.propTypes = {
  project: PropTypes.object,
}

export default Project
