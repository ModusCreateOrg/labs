import React from 'react';
import classnames from 'classnames';
import s from './styles.module.scss';


const Snapshots = (props) => {

    return (
        <article className={s.otherContentContainer}>
            <h3 className={classnames(s.titleProps, s.teamHeading)}>{props.project.title}</h3>
            <div className={s.screenshotsContainer}>
                {props.project['screenshots'] ? props.project.screenshots.map((shot, index) => (
                    <div className={s.screenshots} key={`screen_${index}`}>
                        <img src={shot.screen} className={s.screenshotImage} alt="MC" />
                    </div>
                )
                ) : null}
            </div>
        </article>
    )
}

export default Snapshots;