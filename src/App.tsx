import React, { useState, useEffect } from "react";
import "./App.scss";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

import { Link, Element, animateScroll as scroll } from "react-scroll";

import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";
import ParticleBackground from 'react-particle-backgrounds'

import { sendEmail } from "./appUtils";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const toggle = () => {
  const items = document.getElementsByClassName("item");
  for (const itemKey in items) {
    if (!Number.isNaN(parseInt(itemKey))) {
      const item = items[itemKey];
      if (item.className) {
        if (!item.className.includes("active")) {
          item.className = "item active";
        } else {
          item.className = "item";
        }
      }
    }
  }
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

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
    }, 3000);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 200,
      height: 500,
      useBouncyWalls: false
    },
    particle: {
      particleCount: 50,
      color: '#ff417d',
      minSize: 2,
      maxSize: 5
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 1,
      maxSpeed: 5
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 3000
    }
  }

  return (
    <div className="App">
      <nav>
        <ul className="menu">
          <li className="logo">
            <Button
              className="color-white"
              onClick={() => {
                scrollToTop();
                toggle();
              }}
            >
              Pranav
            </Button>
          </li>
          <li className="item">
            <Link
              activeClass="active"
              className="nav-elem"
              to="tf-nets"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button onClick={toggle}>Tf Nets</Button>
            </Link>
          </li>
          <li className="item">
            <Link
              activeClass="active"
              className="nav-elem"
              to="k8s-archs"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button onClick={toggle}>K8s archs</Button>
            </Link>
          </li>
          <li className="item">
            <Link
              activeClass="active"
              className="nav-elem"
              to="react-comps"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button onClick={toggle}>React Comps</Button>
            </Link>
          </li>
          <li className="item">
            <Link
              activeClass="active"
              className="nav-elem"
              to="contact-me"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button className="margin-right-20px" onClick={toggle}>
                Contact Me
              </Button>
            </Link>
          </li>
          <li className="toggle" onClick={toggle}>
            <Button className="color-white">
              <MenuIcon />
            </Button>
          </li>
        </ul>
      </nav>
      <div className="loader" id="loader">
        <PacmanLoader
          css={override}
          size={150}
          margin={2}
          color={"#123abc"}
          loading={isLoading}
        />
      </div>
      <div id="after-loader" className="after-loaded-hidden">
        <Element name="hero" className="element first-hero">
          <div className="title">
            <ParticleBackground settings={settings} />
            <h1 className="title-text">PRANAV KUMAR</h1>
            <h3>
            <strong>I <strong> build, deploy & maintain </strong> neural nets</strong>
            </h3>
          </div>
        </Element>
        <div className="flex">
          <h1>| | |</h1>
        </div>

        <Element name="tf-nets" className="element">
        <div className="flex"> <h3> Tensorflow Neural Nets </h3></div>
        </Element>

        <div className="flex flex-wrap">
          <Paper className="hero-paper" variant="outlined" elevation={3}>
            <img src="dhoni.jpeg" alt="text" className="paper_image" />
            <h4>Regression Network</h4>
            <p>
              In this kernel I use multiple predictive models on cricket datset
            </p>
            <a
              href="https://github.com/pbpranavk/iplAnalysis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue"
            >
              View on Github
            </a>
          </Paper>
          <Paper className="hero-paper" variant="outlined" elevation={3}>
            <img src="cancer_testing.jpg" alt="text" className="paper_image" />
            <h4>Classification Network</h4>
            <p>
              In this kernel I use multiple predictive models on cancer datset,
              to predict if a patient has breast cancer or not
            </p>
            <a
              href="https://github.com/pbpranavk/BreastCancer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue"
            >
              View on Github
            </a>
          </Paper>
          <Paper className="hero-paper" variant="outlined" elevation={3}>
            <img src="lip_reading.jpeg" alt="text" className="paper_image" />
            <h4>Convolutional Network</h4>
            <p>
              In this kernel I build ConvNet to interpret words from an image of
              lips
            </p>
            <p>
              <a
                href="https://www.kaggle.com/apoorvwatsky/miraclvc1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                The data
              </a>
            </p>
            <p>
              <a
                href="https://github.com/pbpranavk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                Coming Soon on Github
              </a>
            </p>
          </Paper>
        </div>
        <div className="flex">
          <h1>| | |</h1>
        </div>

        <Element name="k8s-archs" className="element">
          <div className="flex"> <h3> Kubernetes Architectures </h3></div>
        </Element>

        <div className="flex flex-wrap">
          <Paper className="hero-paper " variant="outlined" elevation={3}>
            <img
              src="monolithic_vs_microservice.png"
              alt="text"
              className="paper_image"
            />
            <h4>Microservices Architecture Mock Application</h4>
            <p>In this project I break a monolith using gRPC, GraphQL, REST.</p>
            <p>
              <a
                href="https://github.com/pbpranavk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                Coming Soon on Github
              </a>
            </p>
          </Paper>
          <Paper className="hero-paper " variant="outlined" elevation={3}>
            <img
              src="event_driven_arch.png"
              alt="text"
              className="paper_image"
            />
            <h4>Event driven architecture paradigm</h4>
            <p>
              This project deals with generation, processing and consumption of
              event between multiple microservices{" "}
            </p>
            <p>
              <a
                href="https://github.com/pbpranavk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                Coming Soon on Github
              </a>
            </p>
          </Paper>
          <Paper className="hero-paper " variant="outlined" elevation={3}>
            <img src="kubeflow.png" alt="text" className="paper_image" />
            <h4>Ml as a Service using Kubeflow</h4>
            <p>
              This project has the configrations for setting up a predictive
              model built using Tensorflow on Kubernetes. This repo also has
              config for continous training of the predictive model when data
              changes.
              <a
                href="https://github.com/pbpranavk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                Coming Soon on Github
              </a>
            </p>
          </Paper>
        </div>
        <div className="flex">
          <h1>| | |</h1>
        </div>

        <Element name="react-comps" className="element">
          <div className="flex"> <h3> UI & FrontEnd Projects </h3></div>

        </Element>

        <div className="flex flex-wrap">
          <Paper className="hero-paper " variant="outlined" elevation={3}>
            <img src="dashboard.jpg" alt="text" className="paper_image" />
            <h4>Enterprise Web Dashboard</h4>
            <p>Built with React and Material-UI. Written in Typescript</p>
            <p>
              <a
                href="https://github.com/pbpranavk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                Coming Soon on Github
              </a>
            </p>
          </Paper>
          <Paper className="hero-paper " variant="outlined" elevation={3}>
            <img
              src="collage_jet_shooter.jpg"
              alt="text"
              className="paper_image"
            />
            <h4>Jet Shooter AR(Android App)</h4>
            <p>
              This is an augmented reality app where few jet shooters attack
              your neighborbood. Save your neighborhood by shooting those enemy
              jets down
            </p>
            <p>
              <a
                href="https://github.com/pbpranavk/Markerless-AR/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                View on Github
              </a>
            </p>
          </Paper>
          <Paper className="hero-paper " variant="outlined" elevation={3}>
            <img src="expense_calc.jpg" alt="text" className="paper_image" />
            <h4>Expense Calculator(iOS App)</h4>
            <p>
              Track your daily expenses using this app, it is built with Swift5
            </p>
            <p>
              <a
                href="https://github.com/pbpranavk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                Coming Soon on Github
              </a>
            </p>
          </Paper>
        </div>
        <div className="flex">
          <h1>| | |</h1>
        </div>

        <Element name="contact-me" className="element">
          <h3 className="margin-left-20px">Contact Me</h3>
          <div className="flex flex-direction-column contact-me">
            <TextField
              className="contact-me-input"
              label="Name"
              variant="outlined"
            />
            <TextField
              className="contact-me-input"
              label="Email"
              variant="outlined"
            />
            <TextField
              className="contact-me-input"
              label="Message"
              variant="outlined"
              multiline
              rowsMax={6}
            />
            <div className="flex">
              <Button
                className="m-10-px"
                variant="contained"
                onClick={() => {
                  sendEmail("abc", "pbpranav24@gmail.com", "def");
                }}
              >
                Send
              </Button>
              <Button
                className="m-10-px"
                variant="contained"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1ERpDlvblMEPjUuUvF_E16uVJL_kvQJRP/view?usp=sharing"
              >
                My Resume
              </Button>
            </div>
          </div>
        </Element>

        <div className="flex footer">
          <Button
            href="https://github.com/pbpranavk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="footer-icon margin-right-10px" />
          </Button>
          <Button
            href="https://twitter.com/pbpranav24/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="footer-icon" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
