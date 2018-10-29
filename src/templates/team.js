import React from 'react';
import TwitterButton from '../components/project/TwitterButton';
import classnames from 'classnames';
import s from './styles.module.scss';

const Team = (props) => {

    return (
    <article className={s.otherContentContainer}>
        <h3 className={classnames(s.titleProps, s.teamHeading)}>Team</h3>
        <div className={s.team}>
            {props.project.team.map((t, index) => {
                return (
                    <div className={s.member} key={`memberName${index}`}>
                        <img className={s.teamAvatar} src={`https://avatars.io/twitter/` + t.twitter} alt={t.name} />
                        <div className={s.memberDetails}>
                            <span className={classnames(s.titleProps, s.memberName)}>{t.name}</span>
                            <br /><a href={`https://twitter.com/` + t.twitter}>
                                <span className={s.twitterButton}>
                                    @{t.twitter} <TwitterButton text={t.twitter} />
                                </span>
                            </a>
                        </div>
                    </div>
                )
            })}
        </div>
    </article>
    )
}
export default Team;