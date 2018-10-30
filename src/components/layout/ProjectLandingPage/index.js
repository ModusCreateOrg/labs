import React from 'react';
import OnIdle from '@modus/react-idle';
import { Link } from 'gatsby';

import DefaultLayout from '../Defaults';
import LogoBlack from '../../Logo/LogoBlack';
import Footer from '../../Footer';

import s from './styles.module.scss';

export default class ProjectLandingPage extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <main className={s.main}>
          <div className={s.innerContent}>
            <Link to="/">
              <LogoBlack />
            </Link>
            {this.props.children}
          </div>
        </main>
        <OnIdle syncUpdate>
          <Footer />
        </OnIdle>
      </DefaultLayout>
    );
  }
}
