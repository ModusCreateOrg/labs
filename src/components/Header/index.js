import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import CloudinaryImage from '../LazyImage';
import AnimatedWords from '../AnimatedWords';
import Logo from '../Logo';

import s from './styles.module.scss';

const WORDS = [
  'header.animated.line',
  'header.animated.problem',
  'header.animated.persona',
  'header.animated.sketch',
  'header.animated.pixel',
  'header.animated.test',
  'header.animated.deployment',
  'header.animated.release',
  'header.animated.integration',
];

const Header = () => (
  <header className={s.hero}>
    <div className={s.innerContainer}>
      <h1>
        <Logo />
      </h1>
      <h3 className={s.introHeader}><FormattedMessage id="header.introHeader" /></h3>
      <strong className={s.heading__main}>
        <FormattedMessage id="header.heading1" />
        <AnimatedWords words={WORDS} />
        <FormattedMessage id="header.heading2" />
      </strong>
      <h3 className={s.outroHeader}><FormattedMessage id="header.outroHeader" /></h3>
      <CloudinaryImage
        filename="desktop-side-artifacts.png"
        className={s.artifactsDesktop}
        alt="Modus Labs"
      />
      <CloudinaryImage
        filename="mobile-side-artifacts.png"
        className={s.artifactsMobile}
        alt="Modus Labs"
      />
    </div>
    <svg
      viewBox="0 0 1440 171"
      xmlns="https://www.w3.org/2000/svg"
      className={`${s.cutout} ${s.sm}`}
    >
      <path d="M1440 166v5H0V.5L720 166 1440 .5V166z" fill="#FFF" fillRule="evenodd" />
    </svg>
    <svg
      viewBox="0 0 1440 82"
      xmlns="https://www.w3.org/2000/svg"
      className={`${s.cutout} ${s.md}`}
    >
      <path d="M1440 79.11v2.39H0V0l720 79.11L1440 0v79.11z" fill="#FFF" fillRule="evenodd" />
    </svg>
    <svg
      viewBox="0 0 1440 45"
      xmlns="https://www.w3.org/2000/svg"
      className={`${s.cutout} ${s.lg}`}
    >
      <path d="M1440 43.195V44.5H0V0l720 43.195L1440 0v43.195z" fill="#FFF" fillRule="evenodd" />
    </svg>
  </header>
);

export default Header;
