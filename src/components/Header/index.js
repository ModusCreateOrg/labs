import React from 'react';
import { Link } from 'gatsby';
import CloudinaryImage from '../CloudinaryImage';
import AnimatedWords from '../AnimatedWords';
import s from './styles.module.scss';

const WORDS = [
  'Line of Code',
  'Problem',
  'Persona',
  'Sketch',
  'Pixel',
  'Test',
  'Deployment',
  'Release',
  'Integration',
];

const Header = ({ siteTitle }) => (
  <header className={s.hero}>
    <div className={s.innerContainer}>
      <div className={s.logoContainer}>
        <CloudinaryImage id="Modus-Labs-Logo-Long-White.svg" className={s.logo} alt="Modus Labs" />
      </div>
      <h3 className={s.introHeader}>Changing the world</h3>
      <h1>One</h1>
      <h1 className={s.animatedWords}>
        <AnimatedWords words={WORDS} />
      </h1>
      <h1>At A Time</h1>
      <h3 className={s.outroHeader}>Open source community driven experiments</h3>

      <CloudinaryImage id="desktop-side-artifacts.png" className={s.artifactsDesktop} />
      <CloudinaryImage id="mobile-side-artifacts.png" className={s.artifactsMobile} />
    </div>
    <svg
      viewBox="0 0 1440 171"
      xmlns="http://www.w3.org/2000/svg"
      className={`${s.cutout} ${s.sm}`}
    >
      <path d="M1440 166v5H0V.5L720 166 1440 .5V166z" fill="#FFF" fillRule="evenodd" />
    </svg>
    <svg viewBox="0 0 1440 82" xmlns="http://www.w3.org/2000/svg" className={`${s.cutout} ${s.md}`}>
      <path d="M1440 79.11v2.39H0V0l720 79.11L1440 0v79.11z" fill="#FFF" fillRule="evenodd" />
    </svg>
    <svg viewBox="0 0 1440 45" xmlns="http://www.w3.org/2000/svg" className={`${s.cutout} ${s.lg}`}>
      <path d="M1440 43.195V44.5H0V0l720 43.195L1440 0v43.195z" fill="#FFF" fillRule="evenodd" />
    </svg>
  </header>
);

export default Header;
