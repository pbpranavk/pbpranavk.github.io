import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";

import { WorkCard } from "../components";

const WorkSection = ({ classes = {} }) => {
  return (
    <>
      <Box mt={10}>
        <Box display="flex" className={classes.justifyContentCenter}>
          <Typography
            variant="h3"
            className={classes.sectionTitle}
            color="primary"
          >
            My Work
          </Typography>
        </Box>
        <Box display="flex" className={classes.sectionContent}>
          <WorkCard
            imgSrc={"react_animated_navbar.png"}
            title={"Animated Navbar in React"}
            desc={
              "A Stripe style animated Navbar built with React, styled-components & react-flip library. "
            }
            link={"https://codesandbox.io/s/react-stripe-style-navbar-5r8x4"}
            linkTxt={"View on CodeSandbox"}
          />
          <WorkCard
            imgSrc={"spidywebar.png"}
            title={"Augmented Reality on the web"}
            desc={
              "A marker based Augmented Reality app for the web created with react and aframe."
            }
            link={"https://github.com/pbpranavk/archive/tree/master/spidyWebAR"}
            linkTxt={"View on Github"}
          />

          <WorkCard
            imgSrc={"gradientCards2.png"}
            title={"Gradient Cards"}
            desc={`A set of cards with smooth gradients that go easy on eye as weel as attract
                  focus which are built with React. These can be used when you want to style your UI with rather a vibrant colors
                  to provide a soothing effect to the user.`}
            link={"https://8xzcw.csb.app/"}
            linkTxt={"View deployed version"}
          />

          <WorkCard
            imgSrc={"event_driven_arch.png"}
            title={"Exploring react query"}
            desc={`A codesandbox where I go throught the well established API called react-query which can be used
                     along with axios to retrieve data from a REST/GraphQL API. It can also mutate(POST, PUT, DEL) data in the DB`}
            link={"https://g658q.csb.app/"}
            linkTxt={"View deployed version"}
          />

          <WorkCard
            imgSrc={"django-react-k8s.png"}
            title={"A fully orchestrated app"}
            desc={`A full stack app built with django, django-rest-framework, react. I containerized
                it using docker and wrote yml scripts for deployments, services to create resource in Kubernetes.
                I've written those scripts for django main service(react is served from it), MySQL, Postgres & Redis
                `}
            link={
              "https://github.com/pbpranavk/full_stack_app_with_orchestration"
            }
            linkTxt={"Check it out"}
          />

          <WorkCard
            className={classes.workCardPadding}
            imgSrc={"cancer_testing.jpg"}
            title={"Neural Net with Keras"}
            desc={`I've built an Artificial Neural Network with Keras on the
                  Indian Pima Indians Diabetes Dataset.`}
            link={"https://www.kaggle.com/pranavcoder/keras-ann"}
            linkTxt={"Check it out"}
          />
        </Box>
      </Box>
    </>
  );
};

WorkSection.propTypes = {
  classes: PropTypes.object,
};

export default WorkSection;
