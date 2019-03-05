import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import classnames from 'classnames';
import { StaticQuery, graphql } from 'gatsby';

import './normalize.scss';

function canUseWebP() {
  const elem = document.createElement('canvas');

  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  } else {
    return false;
  }
}

export default class HomeLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    webpSupported: null,
  };

  componentDidMount() {
    this.setState({ webpSupported: canUseWebP() });
  }

  render() {
    const { children } = this.props;
    const { webpSupported } = this.state;
    return (
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
          <div
            className={classnames({
              webp: webpSupported === true,
              nowebp: webpSupported === false,
            })}
          >
            <Helmet>
              <title>{data.site.siteMetadata.title}</title>
              <meta
                property="description"
                content="Modus Create Labs. Code examples that make world's most exciting applications. Developed by Modus Create's certified industry experts."
              />
              <meta
                property="keywords"
                content="React, Vue, Ionic, Angular, NodeJS, Amazon Web Services, AWS, Cloudformation, Terraform, Serverless, Lambda, Mobile native, iOS, Android"
              />
              <meta property="og:title" content={data.site.siteMetadata.title} />
              <meta
                property="og:description"
                content="Libraries, reference apps, and learning materials that showcase how world's most exciting, mission-critical web projects are made."
              />
              <meta
                property="og:image"
                content="https://res.cloudinary.com/modus-labs/image/upload/v1531492623/labs/logo-black.png"
              />
              <meta property="og:url" content="https://labs.moduscreate.com" />
              <meta
                name="twitter:card"
                content="https://res.cloudinary.com/modus-labs/image/upload/v1531492623/labs/logo-black.png"
              />

              <meta property="og:site_name" content="Modus Labs" />
              <meta name="twitter:image:alt" content="Modus Labs" />

              <meta name="twitter:site" content="@moduscreate" />
            </Helmet>
            {children}
          </div>
        )}
      />
    );
  }
}
