import React from 'react';
import { Link } from 'gatsby';
import ContactHero from '../ContactHero';
import logo from '../../images/logo/SVG/Modus-Labs-Logo-Long-White.svg';
import s from './styles.module.scss';

const YEAR = new Date().getFullYear();

const Footer = () => (
  <footer className={s.container}>
    <ContactHero />
    <section className={s.footer}>
      <div className={s.col}>
        <img src={logo} alt="Modus Labs" />
      </div>
      <div className={s.col}>&copy;{` ${YEAR} Modus Create. All rights reserved.`}</div>
      <div className={s.col}>
        <a className={s.link} href="tel:1-855-663-8727">
          1-855-663-8727
        </a>
      </div>
    </section>
  </footer>
);

export default Footer;
