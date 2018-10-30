import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import ProjectOverview from './ProjectOverview';
import Team from './Team';
import Snapshots from './Snapshots';
import ProjectSummaryInfo from './ProjectSummaryInfo';
import LogoBlack from '../components/Logo/LogoBlack';

const DetailsPage = ({ pageContext: { project } }) => {
  return (
    <Layout>
      <LogoBlack/>
      <section>
        {/* Project Summary Information */}
        <ProjectSummaryInfo project={project} />

        {/* Project overview, tags and technology */}
        <ProjectOverview project={project} />

        {/* Project screenshots */}
        <Snapshots project={project} />

        {/* Project team */}
        <Team project={project} />

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
