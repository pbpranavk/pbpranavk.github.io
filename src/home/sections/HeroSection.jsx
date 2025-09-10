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
              I'm a Senior Machine Learning Engineer
            </Typography>
            <Typography variant="body1" className={classes.titleDescription}>
              Senior Machine Learning Engineer with 6+ years of experience
              building scalable AI/ML systems from end to end. Strong foundation
              in software engineering with a career progression from full-stack
              development to ML platforms, technical leadership, and advanced ML
              systems. Skilled in designing and deploying pipelines for data
              ingestion, feature engineering, training, serving, evaluation, and
              observability. Hands-on expertise with Python, Go, TensorFlow,
              PyTorch, Vertex AI, and Kubernetes. Proven track record of
              improving model accuracy, optimizing infrastructure costs, and
              delivering measurable business impact across Ad Tech and AI-driven
              products.
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
                href="https://drive.google.com/file/d/1E6iwuN93IEgtSoUddEfpBgm5E3-Ee6pB/view?usp=sharing"
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
