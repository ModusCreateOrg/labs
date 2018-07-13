import React from 'react';
import s from './styles.module.scss';

const DELAY_TIME = 3;

const animDelay = (idx, total) => {
  const delay = `${DELAY_TIME * idx}s`;
  const animation = `${s.animateWord} ${total * DELAY_TIME}s ease-in-out ${delay} infinite`;

  const anim = {
    WebkitAnimation: animation,
    MsAnimation: animation,
    animation: animation,
  };

  return anim;
};

const AnimatedWords = ({ words }) => (
  <div className={s.animatedWords}>
    {words.map((word, idx, arr) => (
      <span key={idx} style={animDelay(idx, arr.length)}>
        {word}
      </span>
    ))}
  </div>
);

export default AnimatedWords;
