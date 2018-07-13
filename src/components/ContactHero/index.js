import React from 'react';
import { Link } from 'gatsby';

import s from './styles.module.scss';

const ContactHero = () => (
  <section>
    <article>
      <h2 className={s.title}>
        Ready to <span className={s.highlight}>collaborate</span> with Modus?
      </h2>
      <p>
        Whether you have a new project, idea, or just want to see a sketch come to life we are here to help your dreams
        become reality. Multi-disciplinary teams are ready to assist you on any project type. Just hit us up!
      </p>
      <div>
        <a className={s.cta} href="mailto:info@moduscreate.com">
          Email us
        </a>
        <a className={s.cta} href="tel:1-855-663-8727">
          1-855-663-8727
        </a>
      </div>
    </article>
    <aside />
  </section>
);

export default ContactHero;
