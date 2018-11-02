import React from 'react';
import OnIdle from '@modus/react-idle';

import DefaultLayout from '../Defaults';
import Header from '../../Header';
import Footer from '../../Footer';

import s from './styles.module.scss';

export default class HomeLayout extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <Header />
        <main className={s.main}>
          <div className={s.innerContent}>{this.props.children}</div>
        </main>
        <OnIdle syncUpdate>
          <Footer />
        </OnIdle>
      </DefaultLayout>
    );
  }
}
