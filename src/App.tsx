import React from "react";
import "./App.scss";

import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

import {
  Link,
  Element,
  animateScroll as scroll,
} from "react-scroll";

import { Parallax } from "react-parallax";

const image1 =
  "/dual_monitor.jpg";
const image2 =
  "/neural_net.jpg";
const image3 =
  "server.jpg";
const image4 =
  "/design.jpg";


function App() {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };


  return (
    <div className="App">
      <AppBar className="app-bar" >
        <div className="flex justify-content-space-between height-100-percent">
          <div className="flex-align-items-center">
            <span className="m-10-px" onClick={scrollToTop}>
              Pranav Kumar
          </span>
          </div>
          <div className="flex-align-items-end m-10-px">
            <Link
              activeClass="active"
              className="test1"
              to="tf-nets"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button>Tf Nets</Button>
            </Link>
            <Link
              activeClass="active"
              className="test1"
              to="k8s-archs"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button>K8s archs</Button></Link>
            <Link
              activeClass="active"
              className="test1"
              to="react-comps"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button>React Comps</Button></Link>
            <Link
              activeClass="active"
              className="test1"
              to="contact-me"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button>Contact Me</Button></Link>
          </div>
        </div>
      </AppBar>


      <Element name="hero" className="element" >
        <Parallax bgImage={image1} blur={{ min: -1, max: 3 }}>
          <div>
            <div className="inside-styles-of-parallax">
              <div className="flex flex-wrap m-t-70-px">
                <Paper className="hero-paper opacity-65-percent" variant="outlined" elevation={3}>
                  I work on Swift, Python, Tensorflow & Neural Nets</Paper>
                <Paper className="hero-paper opacity-65-percent" variant="outlined" elevation={3}>
                  I work on Java, Go, Kubernetes & Cloud-Native Architectures</Paper>
                <Paper className="hero-paper opacity-65-percent" variant="outlined" elevation={3}>
                  I work on TypeScript, React, Swift, Kotlin & UI</Paper>
              </div>
            </div>
          </div>
        </Parallax>
      </Element>
      <div className="flex">
      <h1>| | |</h1>
      </div>


      <Element name="tf-nets" className="element" >
        <Parallax bgImage={image2} blur={{ min: -1, max: 3 }}>
          <div >
            <div className="inside-styles-of-parallax flex-justify-content-end">
              <Paper className="hero-paper opacity-65-percent" variant="outlined" elevation={3}>
                I've working on Machine Learning & Deep Learning since 3 years now.
              </Paper>
            </div>
          </div>
        </Parallax>
      </Element>

      <div className="flex flex-wrap">
        <Paper className="hero-paper" variant="outlined" elevation={3}>
          Regression Network
        </Paper>
        <Paper className="hero-paper" variant="outlined" elevation={3}>
          Classification Network
        </Paper>
        <Paper className="hero-paper" variant="outlined" elevation={3}>
          Generative Network
        </Paper>
      </div>
      <div className="flex">
      <h1>| | |</h1>
      </div>


      <Element name="k8s-archs" className="element" >
        <Parallax bgImage={image3} >
          <div >
            <div className="inside-styles-of-parallax flex-justify-content-end">
              <Paper className="hero-paper opacity-65-percent" variant="outlined" elevation={3}>
                I've working on backend architecture & dev since an years now.
              </Paper>
            </div>
          </div>
        </Parallax>
      </Element>

      <div className="flex flex-wrap">
        <Paper className="hero-paper " variant="outlined" elevation={3}>
          gRPC, GraphQL, REST based microservice application architecture pattern
        </Paper>
        <Paper className="hero-paper " variant="outlined" elevation={3}>
          Event driven architecture paradigm
        </Paper>
        <Paper className="hero-paper " variant="outlined" elevation={3}>
          Sagas based data management
        </Paper>
      </div>
      <div className="flex">
      <h1>| | |</h1>
      </div>


      <Element name="react-comps" className="element" >
        <Parallax bgImage={image4} blur={{ min: -1, max: 3 }}>
          <div >
            <div className="inside-styles-of-parallax flex-justify-content-end">
              <Paper className="hero-paper opacity-65-percent" variant="outlined" elevation={3}>
                I've working on frontend dev since 2 years now.
            </Paper>
            </div>
          </div>
        </Parallax>
      </Element>

      <div className="flex flex-wrap">
        <Paper className="hero-paper " variant="outlined" elevation={3}>
          Enterprise Web Dashboard
        </Paper>
        <Paper className="hero-paper " variant="outlined" elevation={3}>
          android app
        </Paper>
        <Paper className="hero-paper " variant="outlined" elevation={3}>
          ios app
        </Paper>
      </div>
      <div className="flex">
      <h1>| | |</h1>
      </div>


      <Element name="contact-me" className="element" >
        <h3>Contact Me</h3>
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
          <Button className="m-10-px" variant="contained">
            Send
        </Button>
        </div>
      </Element>


      <Icon>add_circle</Icon>
      <Icon>add_circle</Icon>
    </div>
  );
}

export default App;
