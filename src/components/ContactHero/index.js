import React from 'react';
import ContactButton from '../ContactButton';

import s from './styles.module.scss';

const ContactHero = () => (
  <section className={s.container}>
    <article className={s.contentContainer}>
      <h1 className={s.title}>
        Ready to <span className={s.highlight}>collaborate</span> with Modus?
      </h1>
      <h3 className={s.content}>
        Whether you have a new project, idea, or just want to see a sketch come to life we are here
        to help your dreams become reality. Multi-disciplinary teams are ready to assist you on any
        project type. Just hit us up!
      </h3>
      <div className={s.ctaContainer}>
        <ContactButton className={s.cta} href="mailto:info@moduscreate.com" text="Email us" />
        <ContactButton className={s.cta} href="tel:1-855-663-8727" text="Call us now" />
      </div>
    </article>
  </section>
);

export default ContactHero;
