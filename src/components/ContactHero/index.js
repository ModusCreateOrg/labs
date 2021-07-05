import React from 'react';

import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import PrimaryButton from '../PrimaryButton';

import s from './styles.module.scss';

const ContactHero = ({ intl }) => (
  <section className={s.container}>
    <strong className={s.title}>
      <FormattedMessage id="contactHero.title1" />
      <span className={s.highlight}>
        <FormattedMessage id="contactHero.title2" />
      </span><FormattedMessage id="contactHero.title3" />
    </strong>
    <p className={s.content}>
      <FormattedMessage id="contactHero.subTitle" />
    </p>
    <div className={s.ctaContainer}>
      <PrimaryButton className={s.cta} href="mailto:info@moduscreate.com" text={intl.formatMessage({ id: 'contactHero.emailUsButton' })} />
      <PrimaryButton className={s.cta} href="tel:+1-855-721-7223" text={intl.formatMessage({ id: 'contactHero.callUsButton' })} />
    </div>
  </section>
);

ContactHero.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
};

export default injectIntl(ContactHero);
