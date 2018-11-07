import React from 'react';
import { Link } from 'gatsby';
import ContactHero from '../ContactHero';
import Logo from '../Logo';
import s from './styles.module.scss';

const YEAR = new Date().getFullYear();

const Footer = () => (
  <footer className={s.container}>
    <div className={s.innerContainer}>
      <ContactHero />
      <section className={s.footer}>
        <Link className={s.col} to="/">
          <Logo className={s.logo} />
        </Link>
        <div className={s.col}>
          &copy;{` ${YEAR} `}
          <a className={s.link} href="https://moduscreate.com/?utm_source=labs">
            Modus Create
          </a>. All rights reserved.
        </div>
        <div className={s.col}>
          <a className={s.link} href="tel:1-855-663-8727">
            1-855-663-8727
          </a>
        </div>
      </section>
    </div>
  </footer>
);

export default Footer;
