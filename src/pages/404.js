import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import Layout from '../components/layout/Home';

const NotFoundPage = () => (
  <Layout>
    <h1><FormattedMessage id="notFoundPage.title" /></h1>
    <p><FormattedMessage id="notFoundPage.subTitle" /></p>
  </Layout>
);

export default NotFoundPage;
