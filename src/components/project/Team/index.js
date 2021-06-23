import React from 'react';
import PropTypes from 'prop-types';

import TwitterButton from '../TwitterButton';
import s from './styles.module.scss';

const Team = ({ project }) => (
  <aside>
    <h3 className={s.title}>Team</h3>
    <div className={s.team}>
      {project.team.map((teamMember, index) => (
        <div className={s.member} key={`memberName${index}`}>
          <img
            className={s.teamAvatar}
            src={`https://unavatar.now.sh/twitter/${
              teamMember.twitter ? teamMember.twitter : 'moduscreate'
            }`}
            alt={teamMember.name}
            role="presentation"
          />
          <div className={s.memberDetails}>
            <span className={s.memberName}>{teamMember.name}</span>
            <br />
            {teamMember.twitter ? (
              <a href={`https://twitter.com/${teamMember.twitter}`}>
                <span className={s.twitterButton}>
                  @{teamMember.twitter} <TwitterButton text={teamMember.twitter} />
                </span>
              </a>
            ) : (
              <span>{project.name}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  </aside>
);

Team.propTypes = {
  project: PropTypes.shape({
    team: PropTypes.arrayOf(PropTypes.object),
    name: PropTypes.string,
  }),
};

export default Team;
