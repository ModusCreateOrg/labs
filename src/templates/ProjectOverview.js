import React from 'react';
import classnames from 'classnames';
import s from './styles.module.scss';


const ProjectOverview = (props) => {

    return (
        <article className={classnames(s.overview, s.contentContainer)}>
            <div className={classnames(s.overview_content, s.main)}>
                <h3 className={s.titleProps}>Project Overview</h3>
                <div className={s.projectDescription}>{props.project.description}</div>
            </div>
            <div className={classnames(s.data, s.side)}>
                <div className={s.stack}>
                    <h2 className={s.subTitle}>Technology</h2>
                    {props.project.stack.map((stacks, index) => {
                        return <span key={`teck_stacks_${index}`} className={s.technologyContent}> {(index ? ', ' : '') + stacks} </span>
                    })
                    }
                </div>
                <div className={s.tagsSection}>
                    <h2 className={s.subTitle}>Tags</h2>
                    {props.project.tags.map((tag, index) => (
                        <div className={s.tagsParent} key={`tag_index${index}`}>
                            <div className={s.tagsChild}>{tag}</div>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    )
}

export default ProjectOverview;
