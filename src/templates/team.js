import React from 'react';
import TwitterButton from '../components/project/TwitterButton';
import classnames from 'classnames';
import s from './styles.module.scss';

const Team = (props) => {

    return (
    <article className={s.otherContentContainer}>
        <h3 className={classnames(s.titleProps, s.teamHeading)}>Team</h3>
        <div className={s.team}>
            {props.project.team.map((teamMember, index) => {
                return (
                    <div className={s.member} key={`memberName${index}`}>
                        <img className={s.teamAvatar} src={`https://avatars.io/twitter/` + teamMember.twitter} alt={teamMember.name} />
                        <div className={s.memberDetails}>
                            <span className={classnames(s.titleProps, s.memberName)}>{teamMember.name}</span>
                            <br />{ teamMember.twitter ? (<a href={`https://twitter.com/` + teamMember.twitter}>
                                <span className={s.twitterButton}>
                                    @{teamMember.twitter} <TwitterButton text={teamMember.twitter} />
                                </span>
                            </a>) : <span>{props.project.name}</span>}
                        </div>
                    </div>
                )
            })}
        </div>
    </article>
    )
}
export default Team;
