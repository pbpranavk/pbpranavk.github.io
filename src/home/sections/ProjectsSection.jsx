import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";

import { ProjectCard } from "../components";

const ProjectsSection = ({ classes = {} }) => {
  return (
    <>
      <Box mt={10}>
        <Box display="flex" className={classes.justifyContentCenter}>
          <Typography
            variant="h3"
            className={classes.sectionTitle}
            color="primary"
          >
            Projects
          </Typography>
        </Box>
        <Box display="flex" className={classes.sectionContent}>
          {/* <ProjectCard
            imgSrc={"react_animated_navbar.png"}
            title={"Animated Navbar in React"}
            desc={
              "A Stripe style animated Navbar built with React, styled-components & react-flip library. "
            }
            link={"https://codesandbox.io/s/react-stripe-style-navbar-5r8x4"}
            linkTxt={"View on CodeSandbox"}
          /> */}
          {/* <ProjectCard
            imgSrc={"spidywebar.png"}
            title={"Augmented Reality on the web"}
            desc={
              "A marker based Augmented Reality app for the web created with react and aframe."
            }
            link={"https://github.com/pbpranavk/archive/tree/master/spidyWebAR"}
            linkTxt={"View on Github"}
          /> */}

          {/* <ProjectCard
            imgSrc={"gradientCards2.png"}
            title={"Gradient Cards"}
            desc={`A set of cards with smooth gradients that go easy on eye as weel as attract
                  focus which are built with React. These can be used when you want to style your UI with rather a vibrant colors
                  to provide a soothing effect to the user.`}
            link={"https://8xzcw.csb.app/"}
            linkTxt={"View deployed version"}
          /> */}

          {/* <ProjectCard
            imgSrc={"event_driven_arch.png"}
            title={"Exploring react query"}
            desc={`A codesandbox where I go throught the well established API called react-query which can be used
                     along with axios to retrieve data from a REST/GraphQL API. It can also mutate(POST, PUT, DEL) data in the DB`}
            link={"https://g658q.csb.app/"}
            linkTxt={"View deployed version"}
          /> */}

          <ProjectCard
            imgSrc={"fruit_veggies.jpeg"}
            title={"Fruit or Vegetable"}
            desc={`A Convoluted Neural Network (CNN) written in Tensorflow on a 2GB
             dataset of fruits and vegetables. This is a multi-class classifier with
              more than 35 classes.`}
            link={"https://www.kaggle.com/pranavcoder/fruit-or-vegetable"}
            linkTxt={"View on Kaggle"}
          />

          <ProjectCard
            imgSrc={"news.jpeg"}
            title={"What’s the NEWS"}
            desc={`A Recurrent Neural Network (RNN) written in PyTorch
             on a dataset of 200K news headlines from 2012 to 2018 from HuffPost.
              This model can tag untagged news articles as well as it can identify
               the type of language used in an article.`}
            link={"https://www.kaggle.com/pranavcoder/what-s-the-news"}
            linkTxt={"View on Kaggle"}
          />

          <ProjectCard
            imgSrc={"delhi_climate.jpeg"}
            title={"Delhi Climate"}
            desc={`A time series model that models the climate patterns of Delhi based
             on data from Jan 2013 to April 2017. I use windowing and LSTM to build
              a predictive time series model.`}
            link={"https://www.kaggle.com/pranavcoder/delhi-climate"}
            linkTxt={"View on Kaggle"}
          />

          <ProjectCard
            imgSrc={"event_driven_arch.png"}
            title={"Image Captioning with Flickr Image dataset"}
            desc={`A full-stack machine learning project trained on  9GB of data from Flickr to
             write a caption on a given image. I built an API using FastAPI,  deployed it on GCP
              using ML Pipelines & Kubeflow. I have been using tools like Prometheous and Kibana
               for monitoring Metrics and Logs of the deployed model. Finally, I use the shadow
                mode technique to deploy a newer version of the ML model for improved robustness
                 of the prediction.
                `}
            link={"https://github.com/pbpranavk/react-fastapi-mongo"}
            linkTxt={"Check it out"}
          />

          <ProjectCard
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

          <ProjectCard
            className={classes.ProjectCardPadding}
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

ProjectsSection.propTypes = {
  classes: PropTypes.object,
};

export default ProjectsSection;
