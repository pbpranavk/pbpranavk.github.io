import React, { useState, useEffect } from "react";
import "./App.scss";

import { Box, Button, Typography } from "@material-ui/core";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuIcon from "@material-ui/icons/Menu";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles"; // import createPalette from "material-ui/styles/palette";
// import createTypography from "material-ui/styles/typography";

import { Link, Element, animateScroll as scroll } from "react-scroll";
import WorkCard from "./WorkCard";

import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";
import ParticleBackground from "react-particle-backgrounds";

import { sendEmail } from "./appUtils";
import Skills from "./Skills";

import Home from "./Home";

const override = css`
  display: block;
  margin: 50px 20%;
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

const theme = createMuiTheme({
  palette: {
    primary: { main: "#E86410" },
    secondary: { main: "#DDAB8B" },
  },
  typography: {
    fontFamily: '"Comic Sans MS"',
  },
});

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
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
        {/* <Element name="hero" className="element first-hero">
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
 */}
        <Box mt={10} style={{ width: "100%" }}>
          <Element name="home">
            <Box display="flex" style={{ width: "100%", flexWrap: "wrap" }}>
              <Box className="hero-content" mt={20} ml={2}>
                <Typography
                  variant="h3"
                  style={{ color: "#000", fontSize: "50px" }}
                >
                  I build, deploy and maintain software
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    color: "#A4A4A4",
                    fontSize: "30px",
                    marginTop: "20px",
                  }}
                >
                  Stylish Frontends & Smart Backends
                </Typography>
                <Link
                  activeClass="active"
                  className="test1"
                  to="work"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Button
                    variant="contained"
                    // color="primary"
                    style={{
                      marginTop: "40px",
                      backgroundColor: "rgba(232, 100, 16, 0.69)",
                    }}
                  >
                    Checkout My Work
                  </Button>
                </Link>
              </Box>
              <Box className="hero-home-image">
                <img
                  className="hero-home-image-img"
                  src="humanHome.png"
                  alt="home"
                />
              </Box>
            </Box>
          </Element>
          <Element name="skills">
            <Skills />
          </Element>
          <Element name="work">
            <Box mt={10}>
              <Box display="flex" style={{ justifyContent: "center" }}>
                <Typography
                  variant="h3"
                  style={{ fontWeight: "bold", fontSize: "40px" }}
                  color="primary"
                >
                  My Work
                </Typography>
              </Box>
              <Box
                display="flex"
                style={{ flexWrap: "wrap", justifyContent: "center" }}
              >
                <WorkCard
                  imgSrc={"react_animated_navbar.png"}
                  title={"Animated Navbar in React"}
                  desc={
                    "A Stripe style animated Navbar built with React, styled-components & react-flip library. "
                  }
                  link={
                    "https://codesandbox.io/s/react-stripe-style-navbar-5r8x4"
                  }
                  linkTxt={"View on CodeSandbox"}
                />
                <WorkCard
                  imgSrc={"spidywebar.png"}
                  title={"Augmented Reality on the web"}
                  desc={
                    "A marker based Augmented Reality app for the web created with react and aframe."
                  }
                  link={
                    "https://github.com/pbpranavk/archive/tree/master/spidyWebAR"
                  }
                  linkTxt={"View on Github"}
                />

                <WorkCard
                  imgSrc={"event_driven_arch.png"}
                  title={"Template for microservices"}
                  desc={
                    "A template for microservices in python with fastAPI, gRPC, SQLAlchemy, Pytorch, ayncio."
                  }
                  link={
                    "https://github.com/pbpranavk/python_mono_repo/tree/master/FastAPI_endpoints"
                  }
                  linkTxt={"View on Github"}
                />

                <WorkCard
                  imgSrc={"cancer_testing.jpg"}
                  title={"ANN on Indians Diabetes Database"}
                  desc={
                    "In this kernel I use Keras to build a neural network to predict if a patient has diabetes or not"
                  }
                  link={"https://www.kaggle.com/pranavcoder/keras-ann"}
                  linkTxt={"View on kaggle"}
                />

                <WorkCard
                  imgSrc={"expenseCalc.png"}
                  title={"Expense Calculator Mobile App"}
                  desc={
                    "A cross platform mobile app developed using flutter to track & asses monthly expenditure."
                  }
                  link={
                    "https://github.com/pbpranavk/material_mono_repo/tree/master/flutter_widgets"
                  }
                  linkTxt={"View on Github"}
                />
              </Box>
            </Box>
          </Element>
          <Element name="contact">
            <Box mt={10}>
              <Element name="contact-me" className="element">
                <Box display="flex" style={{ justifyContent: "center" }}>
                  <Typography
                    variant="h3"
                    color="primary"
                    style={{ fontWeight: "bold", fontSize: "40px" }}
                  >
                    Contact Me
                  </Typography>
                </Box>
                <div className="flex flex-direction-column contact-me">
                  <TextField
                    className="contact-me-input"
                    label="Name"
                    variant="outlined"
                    style={{ marginTop: "10px" }}
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
                    style={{ marginTop: "10px" }}
                    onChange={(event) => {
                      const {
                        target: { value },
                      } = event;
                      setMsg(value);
                    }}
                  />
                  <Box display="inline">
                    <Typography
                      display="inline"
                      variant="body2"
                      className="flex color-grey"
                    >
                      * Clicking on
                    </Typography>
                    <Typography
                      display="inline"
                      variant="body2"
                      style={{ fontStyle: "italic" }}
                      className="flex color-grey"
                    >
                      {" "}
                      SEND{" "}
                    </Typography>
                    <Typography
                      display="inline"
                      variant="body2"
                      className="flex color-grey"
                    >
                      will redirect you to your email client. Please
                    </Typography>
                    <Typography
                      display="inline"
                      variant="body2"
                      style={{ fontWeight: "bold" }}
                      className="flex color-grey"
                    >
                      {" "}
                      allow{" "}
                    </Typography>
                    <Typography
                      display="inline"
                      variant="body2"
                      className="flex color-grey"
                    >
                      navigation if prompted
                    </Typography>
                  </Box>
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
            </Box>
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
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
