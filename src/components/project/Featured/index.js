import React from 'react';
import PropTypes from 'prop-types';
import DetailsBtn from '../DetailButton';
import { cloudinaryUrlPrefix } from '../../CloudinaryImage';
import s from './styles.module.scss';

const toWebp = path => path.replace(/\.\w{3,4}$/, '.webp');

const Image = ({ filename, ...rest }) => {
  const webpFilename = toWebp(filename);

  return (
    <picture>
      <source
        media="(min-width: 64rem)"
        srcSet={`${cloudinaryUrlPrefix}/q_70,w_180/labs/${webpFilename} 180w,
            ${cloudinaryUrlPrefix}/q_70,w_360/labs/${webpFilename} 2x`}
        sizes="200px"
        type="image/webp"
      />

      <source
        media="(min-width: 64rem)"
        srcSet={`${cloudinaryUrlPrefix}/q_70,w_180/labs/${filename} 180w,
            ${cloudinaryUrlPrefix}/q_70,w_360/labs/${filename} 2x`}
        sizes="200px"
        type="image/png"
      />

      <img
        srcSet={`${cloudinaryUrlPrefix}/f_auto,q_70,w_200/labs/${filename} 200w,
            ${cloudinaryUrlPrefix}/f_auto,q_70,w_400/labs/${filename} 2x`}
        src={`${cloudinaryUrlPrefix}/f_auto,q_70,w_200/labs/${filename}`}
        sizes="200px"
        alt="Modus Labs"
        {...rest}
      />
    </picture>
  );
};

const ProjectFeatured = ({ project }) => (
  <article className={s.project}>
    <aside className={s.image}>
      {project.image ? <Image filename={project.image} alt={project.name} /> : null}
    </aside>
    <div className={s.content}>
      <h2>{project.name}</h2>
      <h3>{project.headline}</h3>
      <p>{project.description}</p>
      <DetailsBtn text="View on" href={project.repo} />
    </div>
  </article>
);

ProjectFeatured.propTypes = {
  project: PropTypes.object,
};

export default ProjectFeatured;
