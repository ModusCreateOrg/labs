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

const DetailsPage = ({ pageContext: { project } }) => {
  return (
    <Layout>
      <Helmet>
        <title>{`${project.pageTitle || project.name} - Modus Labs`}</title>
        {Array.isArray(project.meta) &&
          project.meta.map((attrs, idx) => <meta key={idx} {...attrs} />)}
        <script type="application/ld+json">{`
          {
            "@context": "http://schema.org"
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
              'http://schema.org/WebApplication'
            )}",
            "offers": {
              "@type": "Offer",
              "price": "0.00",
              "priceCurrency": "USD"
            }
          }
      `}</script>
        {project.image ? <meta property="og:image" content={getSrc(project.image)} /> : null}
        {project.name ? (
          <meta
            property="og:site_name"
            content={`${project.pageTitle || project.name} - Modus Labs`}
          />
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
