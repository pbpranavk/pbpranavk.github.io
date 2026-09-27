import React from "react";
import ArrowForwardRounded from "@material-ui/icons/ArrowForwardRounded";

const ProjectCard = ({ imgSrc, category, title, desc, stack, link, linkTxt }) => (
  <article className="featured-project">
    <div className="featured-project-image">
      <img src={`${process.env.PUBLIC_URL}/${imgSrc}`} alt="" loading="lazy" />
    </div>
    <div className="featured-project-content">
      <p className="section-eyebrow">{category}</p>
      <h3>{title}</h3>
      <p className="featured-project-description">{desc}</p>
      <p className="featured-project-stack">{stack}</p>
      <a className="featured-project-link" href={link} target="_blank" rel="noopener noreferrer"
        aria-label={`${linkTxt}: ${title}`}>
        {linkTxt} <ArrowForwardRounded fontSize="small" aria-hidden="true" />
      </a>
    </div>
  </article>
);

export default ProjectCard;
