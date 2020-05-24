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
import ParticleBackground from "react-particle-backgrounds";

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
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

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
      useBouncyWalls: false,
    },
    particle: {
      particleCount: 50,
      color: "#ff417d",
      minSize: 2,
      maxSize: 5,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 1,
      maxSpeed: 5,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 3000,
    },
  };

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
              to="frontend"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <Button onClick={toggle}> Frontend </Button>
            </Link>
          </li>
          <li className="item">
            <Link
              activeClass="active"
              className="nav-elem"
              to="backend"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <Button onClick={toggle}> Backend </Button>
            </Link>
          </li>
          {/* <li className="item">
            <Link
              activeClass="active"
              className="nav-elem"
              to="games-iot"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <Button className="margin-right-20px" onClick={toggle}>
                Games & IOT
              </Button>
            </Link>
          </li> */}

          <li className="item">
            <Link
              activeClass="active"
              className="nav-elem"
              to="contact-me"
              spy={true}
              smooth={true}
              duration={1000}
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
              <strong>
                I <strong> build, deploy & maintain </strong> software
              </strong>
            </h3>
          </div>
        </Element>

        <Element name="frontend" className="element">
          <div className="flex">
            <h1>| | |</h1>
          </div>
        </Element>

        <div className="flex">
          <h3> Frontend & Apps - React  </h3>
        </div>
        <div className="flex flex-wrap">
          <Paper
            className="hero-paper frontend-big-paper"
            variant="outlined"
            elevation={3}
          >
            <img src="spidywebar.png" alt="text" className="paper_image" />
            <h4>
              Marker based Augmented Reality web app with React and Ar.js{" "}
            </h4>
            <p>
              Open{" "}
              <a
                href="https://pbpranavk.github.io/spidyWebAR/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                this website
              </a>{" "}
              in a laptop and after allowing camera permissions open{" "}
              <a
                href="https://pbpranavk.github.io/spidyWebAR/pattern-ultspidymag2.png"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                this
              </a>{" "}
              image in a mobile and point it to the laptop's camera to see an
              augmented reality cube spinning above the image
            </p>
            <p>
              <a
                href="https://github.com/pbpranavk/spidyWebAR/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                View on Github
              </a>
            </p>
          </Paper>
          <Paper
            className="hero-paper frontend-big-paper"
            variant="outlined"
            elevation={3}
          >
            <img src="markerlessAR.png" alt="text" className="paper_image" />
            <h4>Markerless AR Web App with React and Aframe</h4>
            <p>
              Open{" "}
              <a
                href="https://pbpranavk.github.io/reactMarkerlessAR/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                this
              </a>{" "}
              website in your laptop/ mobile after giving camera permissions
              you'll see a 3d cube bouncing along with you
            </p>
            <p>
              <a
                href="https://github.com/pbpranavk/reactMarkerlessAR/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                View on Github
              </a>
            </p>
          </Paper>
          <Paper
            className="hero-paper frontend-big-paper"
            variant="outlined"
            elevation={3}
          >
            <img src="ocean_city_vr.png" alt="text" className="paper_image" />
            <h4>Ocean City VR with React360</h4>
            <p>
              This a 360 scene developed with{" "}
              <a
                href="https://facebook.github.io/react-360/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                React360
              </a>
              . Open{" "}
              <a
                href="https://pbpranavk.github.io/oceanCityVR/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                this
              </a>{" "}
              on a laptop or mobile. If opened in laptop, click and drag the
              screen to see the city in VR, if opened in mobile rotate the
              screen to see it in VR. If you have a VR headset you can see it in
              that as well.
            </p>
            <p>
              <a
                href="https://github.com/pbpranavk/oceanCityVR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                View on Github
              </a>
            </p>
          </Paper>
        </div>

        <div className="flex flex-wrap">
          <Paper className="hero-paper " variant="outlined" elevation={3}>
            <img src="reactDashboard.png" alt="text" className="paper_image" />
            <h4>React Dashboard</h4>
            <p>Built with React and ant-d. ( Still under development ) </p>
            <p>
              <a
                href="https://github.com/pbpranavk/reactDashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                View on Github
              </a>
            </p>
          </Paper>
          <Paper className="hero-paper " variant="outlined" elevation={3}>
            <img src="rn-android.png" alt="text" className="paper_image" />
            <h4>React Native - Android App</h4>
            <p>Mock app to learn completely about react native and android.</p>
            <p>
              <a
                href="https://github.com/pbpranavk/react-native-android-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                View on Github
              </a>
            </p>
          </Paper>
          <Paper className="hero-paper " variant="outlined" elevation={3}>
            <img src="ios.png" alt="text" className="paper_image" />
            <h4>Hello iOS World</h4>
            <p>
              My first iOS app to learn more about SwiftUI and the iOS platform
            </p>
            <p>
              <a
                href="https://github.com/pbpranavk/ios-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                View on Github
              </a>
            </p>
          </Paper>
        </div>

        <Element name="backend" className="element">
          <div className="flex">
            <h1>| | |</h1>
          </div>
        </Element>
        <div className="flex">
          <h3> Backend & Deep Learning - Python </h3>
        </div>

        <div className="flex flex-wrap">
          <Paper className="hero-paper " variant="outlined" elevation={3}>
            <img
              src="monolithic_vs_microservice.png"
              alt="text"
              className="paper_image"
            />
            <h4>Template for microservice</h4>
            <p>A template for microservice in python with gRPC, SQLAlchemy, Pytorch, ayncio.</p>
            <p>
              <a
                href="https://github.com/pbpranavk/template_for_microsercice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                View on Github
              </a>
            </p>
          </Paper>
          <Paper className="hero-paper " variant="outlined" elevation={3}>
            <img
              src="event_driven_arch.png"
              alt="text"
              className="paper_image"
            />
            <h4>Networking Scripts</h4>
            <p>
              A repository with few scripts for and about networking. {" "}
            </p>
            <p>
              <a
                href="https://github.com/pbpranavk/networking_scripts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                View on Github
              </a>
            </p>
          </Paper>
          <Paper className="hero-paper " variant="outlined" elevation={3}>
            <img src="kubeflow.png" alt="text" className="paper_image" />
            <h4>Ml as a Service using Kubeflow</h4>
            <p>
              This project has the configrations for setting up a predictive
              model built using Pytorch on Kubernetes. This repo also has
              config for continous training of the predictive model when data
              changes.
              <a
                href="https://github.com/pbpranavk/ML_as_Service"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                View on Github
              </a>
            </p>
          </Paper>
        </div>

        <div className="flex flex-wrap">
          <Paper className="hero-paper" variant="outlined" elevation={3}>
            <img src="dhoni.jpeg" alt="text" className="paper_image" />
            <h4>Regression Network</h4>
            <p>
              In this kernel I use multiple predictive models on cricket dataset
            </p>
            <a
              href="https://www.kaggle.com/pranavcoder/cricket-stats/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue"
            >
              View on Kaggle
            </a>
          </Paper>
          <Paper className="hero-paper" variant="outlined" elevation={3}>
            <img src="cancer_testing.jpg" alt="text" className="paper_image" />
            <h4>ANN on Indians Diabetes Database</h4>
            <p>
              In this kernel I use Keras to build a neural network to predict if
              a patient has diabetes or not
            </p>
            <a
              href="https://www.kaggle.com/pranavcoder/keras-ann"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue"
            >
              View on kaggle
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
                href="https://www.kaggle.com/pranavcoder/lip-reading/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                View on Kaggle
              </a>
            </p>
          </Paper>
        </div>

        {/* <Element name="games-iot" className="element">
          <div className="flex">
            <h1>| | |</h1>
          </div>
        </Element>
        <div className="flex">
          <h3> Games & IOT - (Unity, Blender & Python) </h3>
        </div>

        <div className="flex flex-wrap">
          <Paper className="hero-paper " variant="outlined" elevation={3}>
            <img
              src="collage_jet_shooter.jpg"
              alt="text"
              className="paper_image"
            />
            <h4>Augmented Reality Game</h4>
            <p>
              In this game AR jets attack you in your environment. You need to
              shoot them down in order to survive. Are you up for the
              challenge?. I've built it using Gyroscope sensor data from mobile
              phone, Unity Game Engine and Blender.

              <a
                href="https://github.com/pbpranavk/Markerless-AR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                View on Github
              </a>
            </p>
          </Paper>
          <Paper className="hero-paper " variant="outlined" elevation={3}>
            <img
              src="vr_game.png"
              alt="text"
              className="paper_image"
            />
            <h4>Virtual Reality game for VR headset</h4>
            <p>
              With Google Daydream SDK, Google cardboard I was able to build a VR Game. This was built with unity and Blender.
              Shoot deadly zombies and save yourself in the game.
            </p>
            <p>
              <a
                href="https://github.com/pbpranavk/VRGAME"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                View on Github
              </a>
            </p>
          </Paper>
          <Paper className="hero-paper " variant="outlined" elevation={3}>
            <img src="car.png" alt="text" className="paper_image" />
            <h4>Self Driving Car</h4>
            <p>
              This was my colleage project made in partnership with{" "}
              <a
                href="https://anuroopshannu.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                Anuroop Shannu
              </a>. We built it using python on raspberry pi. It uses Deep Learning(CNN) to navigate in unknown terrain
              </p>
              <a
                href="https://github.com/pbpranavk/SelfDrivingCar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                View on Github
              </a>
          </Paper>
        </div>
 */}
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
              onChange={(event) => {
                const {
                  target: { value },
                } = event;
                setName(value);
              }}
            />
            <TextField
              className="contact-me-input"
              label="Message"
              variant="outlined"
              multiline
              rowsMax={6}
              onChange={(event) => {
                const {
                  target: { value },
                } = event;
                setMsg(value);
              }}
            />
            <div className="flex color-grey">
              <p>
                * Clicking on <i>SEND</i> will redirect you to your email
                client. Please <b>allow</b> navigation if prompted{" "}
              </p>
            </div>
            <div className="flex">
              <Button
                className="m-10-px"
                variant="contained"
                onClick={() => {
                  sendEmail(name, msg);
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
