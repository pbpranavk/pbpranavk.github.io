import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { Link } from "react-scroll";

const HeroSection = ({ isMaxWidth600 = false, classes = {}, heroSrc = "" }) => {
  return (
    <Box
      mt={10}
      p={isMaxWidth600 ? 2 : 0}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Grid container component={Box}>
        <Grid item md={7}>
          <Box
            ml={isMaxWidth600 ? 0 : 4}
            display="flex"
            flexDirection="column"
            height="100%"
            justifyContent="center"
          >
            <Typography variant="h6" className={classes.title}>
              I like developing software products
            </Typography>
            <Typography variant="body1" className={classes.titleDescription}>
              I like taking on challenging problems and solving them. In my 4
              years of experience as a Software Developer, I’ve contributed to
              the development of two SaaS products at an early-stage startup.
              For the past couple of years, I’ve been building predictive models
              on kaggle. I started my Masters at UC in Artificial Intelligence
              in Aug’22 and I'll be graduating in Aug'23
            </Typography>
            <Box display="flex" className={classes.flexFlowWrap}>
              <Link
                activeClass="active"
                className="test1"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Button variant="contained" className={classes.titleBtn}>
                  Projects
                </Button>
              </Link>
              <Button
                variant="contained"
                className={`${classes.ml8} ${classes.titleBtn}`}
                target="_blank"
                href="https://github.com/pbpranavk?tab=repositories"
              >
                Github
              </Button>
              <Button
                variant="contained"
                className={`${classes.ml8} ${classes.titleBtn}`}
                target="_blank"
                href="https://www.kaggle.com/pranavcoder"
              >
                Kaggle
              </Button>
              <Button
                variant="contained"
                className={`${classes.ml8} ${classes.titleBtn}`}
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/11sHc-XAP1jhg4apyVZ6sR2_nwE4XpcH9/view?usp=sharing"
              >
                My Resume
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item md={5}>
          <Box
            display="flex"
            mt={2}
            pr={isMaxWidth600 ? 0 : 4}
            justifyContent={isMaxWidth600 ? "flex-start" : "flex-end"}
            alignItems="center"
            height="100%"
          >
            <img style={{ width: "90%" }} src={heroSrc} alt="home" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

HeroSection.propTypes = {
  isMaxWidth600: PropTypes.bool,
  classes: PropTypes.object,
  heroSrc: PropTypes.string,
};

export default HeroSection;
