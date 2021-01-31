import React, { useState, useEffect } from "react";
import "./App.scss";
import {
  Box,
  Button,
  Divider,
  Typography,
  Grid,
  useMediaQuery,
  makeStyles,
} from "@material-ui/core";

// import TextField from "@material-ui/core/TextField";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link, Element } from "react-scroll";
import WorkCard from "./WorkCard";
// import BlogCard from "./BlogCard";

import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";

// import { sendEmail } from "./appUtils";
import Skills from "./Skills";

import Home from "./Home";
import JourneyCard from "./JourneyCard";

import heroSrc from "./assets/hero.png";

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
}));

const PortfolioHome = (props) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  // const [name, setName] = useState("");
  // const [msg, setMsg] = useState("");
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
    }, 2000);
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
      <Home />
      <Box>
        <Element name="home">
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
                  <Typography
                    variant="h3"
                    style={{ color: "#000", fontSize: "45px" }}
                  >
                    I'm a Software Developer.
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      color: "#A4A4A4",
                      fontSize: "28px",
                      marginTop: "20px",
                    }}
                  >
                    I devote my time in developing intuitive UI components that
                    are Clear, Consistent & Luxurious which are responsive
                    across all devices and all resolutions in React. I can build
                    neural networks using PyTorch. I'm good at Data Structures
                    and Algorithms as well.
                  </Typography>
                  <Box display="flex" style={{ flexFlow: "wrap" }}>
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
                        My Work
                      </Button>
                    </Link>
                    <Button
                      variant="contained"
                      className={classes.ml8}
                      // color="primary"
                      target="_blank"
                      href="https://github.com/pbpranavk?tab=repositories"
                      style={{
                        marginTop: "40px",
                        backgroundColor: "rgba(232, 100, 16, 0.69)",
                      }}
                    >
                      Github
                    </Button>
                    <Button
                      variant="contained"
                      className={classes.ml8}
                      // color="primary"
                      target="_blank"
                      href="https://pbpranavk.github.io/research/"
                      rel="noopener noreferrer"
                      style={{
                        marginTop: "40px",
                        backgroundColor: "rgba(232, 100, 16, 0.69)",
                      }}
                    >
                      My Research
                    </Button>
                    <Button
                      variant="contained"
                      className={classes.ml8}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://drive.google.com/file/d/1nzDtpUVGLZdmJ4mGA_B4CpvAK_PI-Htd/view?usp=sharing"
                      style={{
                        marginTop: "40px",
                        backgroundColor: "rgba(232, 100, 16, 0.69)",
                      }}
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
                  Software Engineer :). I learnt about gRPC and micro-services here. 2020 was bang
                  our company had to reinvent themselves, so did I. I find myself building easy to use and
                  smooth, responsive UI components these days.
                  `}
                img="full_stack.jpeg"
              />
            </Box>
          </Box>
        </Element>
        <Divider />
        {/* <Element name="blogs">
          <Box mt={10}>
            <Box display="flex" style={{ justifyContent: "center" }}>
              <Typography
                variant="h3"
                style={{ fontWeight: "bold", fontSize: "40px" }}
                color="primary"
              >
                My Blogs
              </Typography>
            </Box>
            <Box
              display="flex"
              style={{ flexWrap: "wrap", justifyContent: "center" }}
            >
              <BlogCard
                className={classes.workCardPadding}
                imgSrc={"react-blog.png"}
                title={"React Blog"}
                desc={`I've been learning how to design & build robust, easy to use applications.
                 I write about my learnings.`}
                link={"/learn-react"}
                linkTxt={"Read it"}
              />

              <BlogCard
                className={classes.workCardPadding}
                imgSrc={"rn-android.png"}
                title={"React Native Blog"}
                desc={`I write everything from basic linux-android OS & networking tasks to how the React Native
                code is compiled to native code and best practices for RN components.`}
                link={"/learn-rn"}
                linkTxt={"Read it"}
              />
            </Box>
          </Box>
        </Element> */}

        {/* <Box
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
          <Divider className={classes.primaryDivider} /> */}
        {/* <Element name="contact">
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
        </Element>*/}
        <div className="flex footer mt-24">
          <Button
            href="https://github.com/pbpranavk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="footer-icon margin-right-10px wheat-color" />
          </Button>
          <Button
            href="https://twitter.com/pbpranav24/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="footer-icon margin-right-10px wheat-color" />
          </Button>
          <Button
            href="https://www.linkedin.com/in/pranav-kumar-b0563b147/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="footer-icon wheat-color" />
          </Button>
        </div>
      </Box>
    </div>
  );
};

PortfolioHome.propTypes = {};

export default PortfolioHome;
