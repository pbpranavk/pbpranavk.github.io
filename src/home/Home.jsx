import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { Box, Divider, useMediaQuery, makeStyles } from "@material-ui/core";
import PacmanLoader from "react-spinners/PacmanLoader";

import { TopBar } from "./components";
import {
  HeroSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  FooterSection,
  ArticlesSection,
} from "./sections";
// import ArticlesList from "../blog/ArticlesList";

import heroSrc from "../assets/hero.png";
import "../App.scss";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 50px 20%;
  border-color: red;
`;

const useStyles = makeStyles((theme) => ({
  mt: {
    marginTop: "8px",
  },
  mb: {
    marginBottom: "8px",
  },
  ml8: { marginLeft: "8px" },
  mx10: {
    marginRight: "5%",
    marginLeft: "5%",
  },
  primaryDivider: {
    backgroundColor: "#1e40af",
  },
  textAlign: {
    textAlign: "justify",
  },
  workCardPadding: {},
  title: {
    color: "#1e293b",
    fontSize: "35px",
  },
  titleDescription: {
    color: "#64748b",
    fontSize: "28px",
    marginTop: "10px",
  },
  flexFlowWrap: {
    flexFlow: "wrap",
  },
  titleBtn: {
    marginTop: "40px",
    backgroundColor: "#1e40af",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#1e3a8a",
    },
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: "40px",
  },
  sectionContent: {
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "900px",
    margin: "0 auto",
    gap: "20px",
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const isMaxWidth600 = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      const afterLoaded = document.getElementById("after-loader");
      if (afterLoaded) {
        afterLoaded.className = "after-loaded-visible";
      }
      const loader = document.getElementById("loader");
      if (loader) {
        loader.className = " display-none";
      }
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="loader" id="loader">
        <PacmanLoader
          css={override}
          size={150}
          margin={1}
          color={"#000000"}
          loading={isLoading}
        />
      </div>
    );
  }

  return (
    <div className="App">
      <div style={{ maxWidth: "1440px", margin: "auto" }}>
        <TopBar />
        <Box>
          <Element name="home">
            <HeroSection
              isMaxWidth600={isMaxWidth600}
              classes={classes}
              heroSrc={heroSrc}
            />
          </Element>

          <Element name="skills">
            <SkillsSection classes={classes} />
          </Element>

          <Element name="projects">
            <ProjectsSection classes={classes} />
          </Element>

          <Element name="articles">
            <ArticlesSection classes={classes} />
          </Element>

          <Element name="experience">
            <ExperienceSection classes={classes} />
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
