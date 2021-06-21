import React from 'react';
import OnIdle from '@modus/react-idle';
import PropTypes from 'prop-types';

import DefaultLayout from '../Defaults';
import Header from '../../Header';
import Footer from '../../Footer';

import s from './styles.module.scss';

const HomeLayout = ({ children }) => (
  <DefaultLayout>
    <Header />
    <main className={s.main}>
      <div className={s.innerContent}>{children}</div>
    </main>
    <aside className={s.netlify}>
      <a href="https://www.netlify.com">
        <img
          src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
          alt="Netlify"
        />
      </a>
    </aside>
    <OnIdle syncUpdate>
      <Footer />
    </OnIdle>
  </DefaultLayout>
);

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeLayout;
