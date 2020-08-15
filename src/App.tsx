import React, { useState, useEffect } from "react";
import "./App.scss";
import clsx from "clsx";
import {
  Box,
  Button,
  Divider,
  Typography,
  Grid,
  useMediaQuery,
  makeStyles,
} from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles"; // import createPalette from "material-ui/styles/palette";
// import createTypography from "material-ui/styles/typography";

import { Link, Element } from "react-scroll";
import WorkCard from "./WorkCard";

import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";

import { sendEmail } from "./appUtils";
import Skills from "./Skills";

import Home from "./Home";
import JourneyCard from "./JourneyCard";

const override = css`
  display: block;
  margin: 50px 20%;
  border-color: red;
`;

const theme = createMuiTheme({
  palette: {
    primary: { main: "#E86410" },
    secondary: { main: "#DDAB8B" },
  },
  typography: {
    fontFamily: '"Comic Sans MS"',
  },
});

const useStyles = makeStyles((theme) => ({
  mt: {
    marginTop: "8px",
  },
  mb: {
    marginBottom: "8px",
  },
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
}));

function App() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
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
    }, 3000);
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
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
        <Box>
          <Element name="home">
            <Box
              mt={10}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Grid container spacing={2} component={Box}>
                <Grid item md={7}>
                  <Box
                    ml={4}
                    display="flex"
                    flexDirection="column"
                    height="100%"
                    justifyContent="center"
                  >
                    <Typography
                      variant="h3"
                      style={{ color: "#000", fontSize: "45px" }}
                    >
                      I build smooth, stylish and robust UI components.
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        color: "#A4A4A4",
                        fontSize: "30px",
                        marginTop: "20px",
                      }}
                    >
                      I am a software engineer. I devote my time in developing intutive UI components
                      that are Clear, Consistent & Luxurious. I write reusable open source
                      components which are cross platform compatible. I take special care while writing them to
                      be responsive across all devices and all resolutions.
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
                    <img
                      style={{ width: "90%" }}
                      src="humanHome4.png"
                      alt="home"
                    />
                  </Box>
                </Grid>
              </Grid>
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
                    "Templates for microservices, base service in python with fastAPI, gRPC, SQLAlchemy, AI, using cookiecutter."
                  }
                  link={"https://github.com/pbpranavk/cookiecutter_templates"}
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
                  imgSrc={"vision_lab.png"}
                  title={"Vision Lab(WIP)"}
                  desc={
                    "A repo containing all my learnings about computer vision. "
                  }
                  link={"https://github.com/pbpranavk/vision_lab"}
                  linkTxt={"View on Github"}
                />
              </Box>
            </Box>
          </Element>
          <Element name="journey">
            <Box mt={10}>
              <Box display="flex" style={{ justifyContent: "center" }}>
                <Typography
                  variant="h3"
                  style={{ fontWeight: "bold", fontSize: "40px" }}
                  color="primary"
                >
                  My Journey
                </Typography>
              </Box>
              <Box
                display="flex"
                style={{ flexWrap: "wrap", justifyContent: "center" }}
              >
                <JourneyCard
                  index={0}
                  title={"An Intro to Programming with Python"}
                  description={`I started programming in 2015 and the first language I learnt was Python.
                     I learnt the basics of the language and explored the various packages it had to offer.
                      I was pleasantly surprised when I understood how powerful it was. From numpy to
                      Pytorch, from gpio to drone-kit. from SimpleHTTPServer to Django. I quickly understood
                      that software is developed as a collective effort and open source has a pivotal role in
                      its development.
                      `}
                  img="pyth.jpeg"
                />

                <JourneyCard
                  index={1}
                  title={"Self Driving Car"}
                  description={`In my second year of B.Tech I contributed to a project at our R&D cell
                  in KMIT. We took a remote controlled car and replaced its circuit board with a raspberry pi.
                  We then hosted a server and there by a web page to control it through that webpage from a
                  mobile. We created a path for it to travel. We attached a camera to it and took images
                  with it. We feed this data to an Artificial Neural Network. We got an accuracy of 84%.
                  This gave me a deep exposure into the world of machine and deep learning. I went through the
                  cutting edge research in this space.I explored Capsule Networks, CNN, RNN, LSTM, GRU etc.
                  `}
                  img="car.png"
                />
                <JourneyCard
                  index={2}
                  title={"Toil with Java"}
                  description={`In my third year of B.Tech I started learning more about Big Data and
                  its engineering. I started with Hadoop and slowly explored few more Big Data Technologies
                  like Spark, Pig, Hive, Sqoop, Flume & ZooKeeper. I wrote code in this phase of my software
                  journey in Java because python ran on only one thread and most importantly MapReduce
                  was predominantly written in Java. I learnt all the core concepts of Java along the way.
                  My first OO experience was with Java. In the same phase I explored emerging tech like
                  Blockchain and IOT.
                  `}
                  img="bigD.png"
                />
                <JourneyCard
                  index={3}
                  title={"Cross Platform App Dev"}
                  description={`In my final year of Engineering, I got an internship with Kony. I
                  was building cross platform mobile apps with javascript, initially js was a bit
                  confusing and as I understood more and more I fell in love with language. In the
                  same time I explored Unity and C#. I built few AR and VR applications with it.
                  `}
                  img="rn-android.png"
                />
                <JourneyCard
                  index={4}
                  title={"Full Stack Dev"}
                  description={`Finally after my graduation, I joined my first company (Beautiful Code) as a full time
                  Software Engineer :). I learnt about gRPC and micro-services here. These days
                  I find myself building screens and more importantly smooth user experience.
                  `}
                  img="full_stack.jpeg"
                />
              </Box>
            </Box>
          </Element>
          <Divider className={classes.primaryDivider} />
          <Box
            mt={2}
            mb={5}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography className={classes.mb} variant="h5" color="primary">
              Bits & Bytes
            </Typography>
            <Typography
              className={clsx(classes.mx10, classes.mb, classes.textAlign)}
            >{`I've been learning how to design & build robust, easy to use applications. I write
              about my learnings which are broadly classified into: Web UI, Mobile UI. The articles
              are of two types: design articles, development articles. The design articles are structured
              into three sections: the problem, fundamental concept & prototype whereas the development
              articles are structured around: the mock, components & composition. Emphasis is given on
              atomic design/ development in these articles.
              `}</Typography>
            <Button
              className={classes.mt}
              variant="contained"
              target="_blank"
              rel="noopener noreferrer"
              href="https://pbpranavk.github.io/bits_and_bytes"
            >
              Read it!!
            </Button>
          </Box>
          <Divider className={classes.primaryDivider} />
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
                      href="https://drive.google.com/file/d/1nzDtpUVGLZdmJ4mGA_B4CpvAK_PI-Htd/view?usp=sharing"
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
