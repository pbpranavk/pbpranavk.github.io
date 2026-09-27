import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { Box, Divider } from "@material-ui/core";

import { TopBar } from "./components";
import {
  HeroSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  FooterSection,
} from "./sections";

import heroSrc from "../assets/hero.png";
import "../App.scss";
const Home = (props) => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setShowIntro(false), prefersReducedMotion ? 0 : 900);
    return () => window.clearTimeout(timer);
  }, []);

  if (showIntro) {
    return (
      <div className="portfolio-intro" role="status" aria-label="Loading portfolio">
        <div className="portfolio-intro-mark" aria-hidden="true">PK<span>.</span></div>
        <p aria-hidden="true">PRANAV KUMAR PB</p>
        <div className="portfolio-intro-track" aria-hidden="true"><span /></div>
      </div>
    );
  }

  return (
    <div className="App">
      <div style={{ maxWidth: "1440px", margin: "auto" }}>
        <TopBar />
        <Box>
          <Element name="home">
            <HeroSection heroSrc={heroSrc} />
          </Element>

          <Element name="skills">
            <SkillsSection />
          </Element>

          <Element name="projects">
            <ProjectsSection />
          </Element>

          <Element name="experience">
            <ExperienceSection />
          </Element>
        </Box>
      </div>
      <Divider />
      <FooterSection />
    </div>
  );
};

Home.propTypes = {};

export default Home;
