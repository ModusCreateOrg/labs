import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'gatsby-plugin-intl';
import s from './styles.module.scss';

const DELAY_TIME = 3;

const animDelay = (idx, total) => {
  const delay = `${DELAY_TIME * idx}s`;
  const animation = `${s.animateWord} ${total * DELAY_TIME}s ease-in-out ${delay} infinite`;

  return {
    WebkitAnimation: animation,
    MsAnimation: animation,
    animation,
  };
};

animDelay.propTypes = {
  idx: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

const AnimatedWords = ({ words }) => (
  <span className={s.animatedWords}>
    {words.map((word, idx, arr) => (
      <span key={idx} style={animDelay(idx, arr.length)}>
        <FormattedMessage id={word} />
      </span>
    ))}
  </span>
);

AnimatedWords.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default AnimatedWords;
