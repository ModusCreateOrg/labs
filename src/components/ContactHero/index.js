import React from 'react';
import PrimaryButton from '../PrimaryButton';

import s from './styles.module.scss';

const ContactHero = () => (
  <section className={s.container}>
    <strong className={s.title}>
      Ready to <span className={s.highlight}>collaborate</span> with Modus?
    </strong>
    <p className={s.content}>
      Whether you have a new project, idea, or just want to see a sketch come to life we are here to
      help your dreams become reality. Multi-disciplinary teams are ready to assist you on any
      project type. Just hit us up!
    </p>
    <div className={s.ctaContainer}>
      <PrimaryButton className={s.cta} href="mailto:info@moduscreate.com" text="Email us" />
      <PrimaryButton className={s.cta} href="tel:1-855-663-8727" text="Call us now" />
    </div>
  </section>
);

export default ContactHero;
