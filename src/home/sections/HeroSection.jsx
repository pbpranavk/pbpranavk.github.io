import React from "react";
import PropTypes from "prop-types";
import { scroller } from "react-scroll";
import ArrowForwardRounded from "@material-ui/icons/ArrowForwardRounded";

const HeroSection = ({ heroSrc = "" }) => (
  <section className="portfolio-section portfolio-hero" aria-labelledby="hero-heading">
    <div className="portfolio-hero-layout">
      <div className="portfolio-hero-copy">
        <p className="section-eyebrow">Pranav Kumar PB · Applied AI Engineer</p>
        <h1 id="hero-heading">Building useful products.<br /><span>Powered by AI.</span></h1>
        <p className="portfolio-hero-intro">
          I bring software engineering and machine learning together to build
          AI-powered applications from intelligent agents to production ML systems.
        </p>
        <div className="portfolio-hero-actions">
          <button className="hero-action hero-action-primary" type="button"
            onClick={() => scroller.scrollTo("experience", { smooth: true, duration: 500, offset: -88 })}>
            View my experience <ArrowForwardRounded fontSize="small" aria-hidden="true" />
          </button>
          <a className="hero-action hero-action-secondary"
            href="https://docs.google.com/document/d/1eSxnyPEKfkUeg1ZKQA1JIKcSzsddrjaJ/edit?usp=sharing&ouid=100852725646133407507&rtpof=true&sd=true"
            target="_blank" rel="noopener noreferrer">View resume</a>
        </div>
        <div className="portfolio-hero-profiles" aria-label="Profiles">
          <a href="https://github.com/pbpranavk" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://www.kaggle.com/pranavcoder" target="_blank" rel="noopener noreferrer">Kaggle ↗</a>
          <a href="https://www.linkedin.com/in/p-b-pranav-kumar/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
      </div>
      <div className="portfolio-hero-art">
        <img src={heroSrc} alt="" />
        <p>Software engineering meets applied AI</p>
      </div>
    </div>
    <dl className="portfolio-hero-details">
      <div><dt>Experience</dt><dd>6+ years in software engineering</dd></div>
      <div><dt>Focus</dt><dd>Generative AI, RAG & agents</dd></div>
      <div><dt>Education</dt><dd>Master’s in Artificial Intelligence</dd></div>
    </dl>
  </section>
);

HeroSection.propTypes = { heroSrc: PropTypes.string };

export default HeroSection;
