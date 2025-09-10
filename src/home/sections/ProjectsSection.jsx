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
            imgSrc={"event_driven_arch.png"}
            title={"Exploring react query"}
            desc={`A codesandbox where I go throught the well established API called react-query which can be used
                     along with axios to retrieve data from a REST/GraphQL API. It can also mutate(POST, PUT, DEL) data in the DB`}
            link={"https://g658q.csb.app/"}
            linkTxt={"View deployed version"}
          /> */}

          <ProjectCard
            imgSrc={"spice_route.png"}
            title={"SpiceRoute: AI-Powered Meal Planning System"}
            desc={`Designed an AI system that personalizes weekly meals, optimizes cooking schedules,
              and auto-generates grocery lists using OR-Tools and LLMs. 
              Built backend with Go, Python, GCP, and Kubernetes; used Playwright to automate cart filling on 
              third-party platforms.`}
            link={"https://github.com/pbpranavk/spiceroute"}
            linkTxt={"View on Github"}
          />

          <ProjectCard
            imgSrc={"fraud_detect.png"}
            title={"ML system - Fraud Detection"}
            desc={`Developed a scalable fraud detection system using Kubeflow Pipelines and Vertex AI, 
              inspired by real-world banking transaction alerts. Designed production-grade ML workflows 
              leveraging GCP services to detect anomalies in real-time financial data.`}
            link={"https://github.com/pbpranavk/fraud_detect"}
            linkTxt={"View on Github"}
          />

          <ProjectCard
            imgSrc={"price_predict.png"}
            title={"ML System - Price Prediction"}
            desc={`Developed a price prediction system using Kubeflow Pipelines and Vertex AI, inspired 
              by real-world product pricing data. Designed production-grade ML 
              workflows leveraging GCP services to predict product prices in real-time.`}
            link={"https://github.com/pbpranavk/price_prediction"}
            linkTxt={"View on Github"}
          />

          {/* <ProjectCard
            imgSrc={"delhi_climate.jpeg"}
            title={"Delhi Climate"}
            desc={`A time series model that models the climate patterns of Delhi based
             on data from Jan 2013 to April 2017. I use windowing and LSTM to build
              a predictive time series model.`}
            link={"https://www.kaggle.com/pranavcoder/delhi-climate"}
            linkTxt={"View on Kaggle"}
          /> */}

          {/* <ProjectCard
            className={classes.ProjectCardPadding}
            imgSrc={"transfer_learning_img.jpeg"}
            title={"Transfer Learning"}
            desc={`In this notebook, I use transfer learning to retrain
            state-of-the-art Neural Networks on the required dataset to get
            optimal results. The datasets I used are Fruit-Vegetable dataset for CNN and
            News data for Text. I use MobileNet for transfer learning in CNN and
            BERT for Text Model. I use Tensorflow for transfer learning.
            `}
            link={"https://www.kaggle.com/pranavcoder/transfer-learning"}
            linkTxt={"View on Kaggle"}
          /> */}

          <ProjectCard
            imgSrc={"fin_agent_adk.png"}
            title={"Tool Driven Agent with Google ADK"}
            desc={`Built a personal finance agent using Google's Agent Development Kit (ADK) and Vertex AI. 
              The agent autonomously processes bank statements, classifies transactions using LLMs, 
              updates Notion budgets, and sends monthly spending digests. Features intelligent budget 
              adjustments based on dining vs grocery spend patterns to encourage healthier habits. 
              Includes detailed documentation on implementing tool-driven agents with ADK and deploying 
              on Vertex AI.`}
            link={"https://github.com/pbpranavk/finance_agent_adk"}
            linkTxt={"Check it out on Github"}
          />

          <ProjectCard
            imgSrc={"fine_tune.png"}
            title={"fine-tuned a LLaMA on Vertex AI"}
            desc={`Fine-tuned LLaMA-2-3B (~3B parameters) on Vertex AI using QLoRA and TorchTune 
              for just $10, achieving strong performance on targeted tasks despite being smaller than 
              foundation models. Implemented automated retraining pipeline with Kubeflow to keep the model 
              updated with latest data trends.`}
            link={
              "https://www.linkedin.com/pulse/i-fine-tuned-llama-vertex-ai-using-torchtune-10-pranav-kumar-pb-8mgic"
            }
            linkTxt={"View on LinkedIn"}
          />

          <ProjectCard
            imgSrc={"drift_detect.png"}
            title={"Handling Drift in ML Systems"}
            desc={`Built a production-ready drift detection system for ML models using Python, FastAPI, 
              Docker and Kubernetes. The system monitors model performance, detects data/concept drift, 
              and automatically triggers retraining when needed. Includes detailed implementation of 
              statistical drift detection methods, A/B testing framework, and automated model retraining 
              pipeline. The article explains core concepts of drift in ML systems with focus on 
              recommendation engines.`}
            link={"https://github.com/pbpranavk/handle_drift_recsys"}
            linkTxt={"View on Github"}
          />

          {/* <ProjectCard
            imgSrc={"event_driven_arch.png"}
            title={"A full stack application with MERN, PyTorch and FastAPI"}
            desc={`A full stack project where the Frontend is written in React.
            The Backend consists of two micro-services where one acts as the gateway.
            The gateway service is an Express service with TypeORM acting as an ORM
            abstraction for MYSQL. It is a TODOs application which serves REST APIs. The FastAPI microservice is
            a single endpoint service which gets data and determines if a person has diabetes or not. The
            model is trained in PyTorch on Pima Indian Diabetes dataset.
                `}
            link={"https://github.com/pbpranavk/mern_pyth"}
            linkTxt={"Check it out on Github"}
          /> */}
        </Box>
      </Box>
    </>
  );
};

ProjectsSection.propTypes = {
  classes: PropTypes.object,
};

export default ProjectsSection;
