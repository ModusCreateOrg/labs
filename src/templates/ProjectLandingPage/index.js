import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import get from 'lodash.get';
import Layout from '../../components/layout/ProjectLandingPage';
import ProjectOverview from '../../components/project/Overview';
import Team from '../../components/project/Team';
import DescriptionBlocks from '../../components/project/DescriptionBlocks';
import ProjectSummaryInfo from '../../components/project/Summary';
import { getSrc } from '../../components/CloudinaryImage';

const DetailsPage = ({ pageContext: { project, site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>{`${project.pageTitle || project.name} - Modus Labs`}</title>
        {project.pageDescription ? (
          <meta
            name="description"
            content={project.pageDescription}
          />
        ) : null}
        {Array.isArray(project.meta) &&
          project.meta.map((attrs, idx) => <meta key={idx} {...attrs} />)}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org"
            "@type": "${get(project, 'structuredData.type', 'SoftwareApplication')}",
            "name": "${get(project, 'structuredData.name', project.name)}",
            "operatingSystem": "${get(
              project,
              'structuredData.os',
              'Windows, Mac OS, Android, iOS'
            )}",
            "applicationCategory": "${get(
              project,
              'structuredData.applicationCategory',
              'https://schema.org/WebApplication'
            )}",
            "offers": {
              "@type": "Offer",
              "price": "0.00",
              "priceCurrency": "USD"
            }
          }
      `}</script>
        {project.name ? (
          <meta
            property="og:title"
            content={`${project.pageTitle || project.name} - Modus Labs`}
          />
        ) : null}
        {project.pageDescription ? (
          <meta
            property="og:description"
            content={project.pageDescription}
          />
        ) : null}
        {project.route ? (
          <meta
            property="og:url"
            content={`${site.siteMetadata.url}${project.route}/`}
          />
        ) : null}
        {project.image ? <meta property="og:image" content={getSrc(project.image)} /> : null}

        {project.route ? (
          <link rel="canonical" href={`${site.siteMetadata.url + project.route}/`} />
        ) : null}
      </Helmet>
      {/* Project Summary Information */}
      <ProjectSummaryInfo project={project} />

      {/* Project overview, tags and technology */}
      <ProjectOverview project={project} />

      {/* Project screenshots */}
      <DescriptionBlocks project={project} />

      {/* Project team */}
      <Team project={project} />
    </Layout>
  );
};

DetailsPage.propTypes = {
  pageContext: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
    }),
    project: PropTypes.shape({
      pageDescription: PropTypes.string,
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
          twitter: PropTypes.string,
        })
      ),
    }),
  }),
};
export default DetailsPage;
