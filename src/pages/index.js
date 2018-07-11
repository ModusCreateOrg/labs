import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Projects from '../components/Projects'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Projects />
  </Layout>
)

export default IndexPage
