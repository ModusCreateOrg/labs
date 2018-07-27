import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import classnames from 'classnames';
import { StaticQuery, graphql } from 'gatsby';
import OnIdle from '@modus/react-idle';

import Header from '../Header';
import Footer from '../Footer';

import './normalize.scss';
import s from './styles.module.scss';

function canUseWebP() {
  var elem = document.createElement('canvas');

  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  } else {
    return false;
  }
}

export default class Layout extends React.Component {
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
    const { children, data } = this.props;
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
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Modus Create Labs' },
                {
                  name: 'keywords',
                  content: 'Modus Create Labs, React, React Native, Vue, Angular, AWS, Devops',
                },
              ]}
            />
            <Header siteTitle={data.site.siteMetadata.title} />
            <main className={s.main}>{children}</main>
            <OnIdle syncUpdate>
              <Footer />
            </OnIdle>
          </div>
        )}
      />
    );
  }
}
