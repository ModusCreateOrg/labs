import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../Header'
import Footer from '../Footer'

import './normalize.scss'
import s from './styles.module.scss'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Modus Create Labs' },
            {
              name: 'keywords',
              content:
                'Modus Create Labs, React, React Native, Vue, Angular, AWS, Devops',
            },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className={s.main}>{children}</main>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
