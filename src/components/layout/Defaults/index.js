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
                title,
                description
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
                name="description"
                content={data.site.siteMetadata.description}
              />
              <meta
                name="keywords"
                content="React, Vue, Ionic, Angular, NodeJS, Amazon Web Services, AWS, Cloudformation, Terraform, Serverless, Lambda, Mobile native, iOS, Android"
              />
              <meta property="og:title" content={data.site.siteMetadata.title} />
              <meta
                property="og:description"
                content={data.site.siteMetadata.description}
              />
              <meta
                property="og:image"
                content="https://moduscreate.com/wp-content/uploads/2020/10/Modus_Labs_SEO_Image.png"
              />
              <meta property="og:url" content="https://labs.moduscreate.com" />
              <meta
                property="twitter:card"
                content="https://moduscreate.com/wp-content/uploads/2020/10/Modus_Labs_SEO_Image.png"
              />

              <meta property="og:site_name" content="Modus Labs" />
              <meta property="twitter:image:alt" content="Modus Labs" />

              <meta property="twitter:site" content="@moduscreate" />
            </Helmet>
            {children}
          </div>
        )}
      />
    );
  }
}
