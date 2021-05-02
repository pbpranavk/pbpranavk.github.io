import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { Box, Divider, useMediaQuery, makeStyles } from "@material-ui/core";
import PacmanLoader from "react-spinners/PacmanLoader";

import { TopBar } from "./components";
import {
  HeroSection,
  SkillsSection,
  WorkSection,
  JourneySection,
  FooterSection,
} from "./sections";
import ArticlesList from "../blog/ArticlesList";

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
    backgroundColor: "#E86410",
  },
  textAlign: {
    textAlign: "justify",
  },
  workCardPadding: {},
  title: {
    color: "#000",
    fontSize: "45px",
  },
  titleDescription: {
    color: "#A4A4A4",
    fontSize: "28px",
    marginTop: "20px",
  },
  flexFlowWrap: {
    flexFlow: "wrap",
  },
  titleBtn: {
    marginTop: "40px",
    backgroundColor: "rgba(232, 100, 16, 0.69)",
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

        <Element name="work">
          <WorkSection classes={classes} />
        </Element>

        <Element name="articles">
          <ArticlesList />
        </Element>

        <Element name="journey">
          <JourneySection classes={classes} />
        </Element>

        <Divider />
        <FooterSection />
      </Box>
    </div>
  );
};

Home.propTypes = {};

export default Home;
