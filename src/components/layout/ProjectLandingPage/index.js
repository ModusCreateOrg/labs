import React from 'react';
import OnIdle from '@modus/react-idle';
import { Link } from 'gatsby';

import DefaultLayout from '../Defaults';
import LogoBlack from '../../Logo/LogoBlack';
import Footer from '../../Footer';

import s from './styles.module.scss';

const ProjectLandingPage = ({children}) => (
  <DefaultLayout>
    <main className={s.main}>
      <div className={s.innerContent}>
        <header>
          <Link to="/">
            <LogoBlack />
          </Link>
        </header>
        <article>
          {children}
        </article>
      </div>
    </main>
    <OnIdle syncUpdate>
      <Footer />
    </OnIdle>
  </DefaultLayout>
);

export default ProjectLandingPage
