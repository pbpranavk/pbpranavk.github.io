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

function App() {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };


  return (
    <div className="App">
      <AppBar className="app-bar" >
        <div className="flex height-100-percent">
          <div className="flex-align-items-center">
          <span onClick={scrollToTop}>
          My New Portfolio
          </span>
            </div>
          <div className="flex-align-items-end">
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
      <div className="flex flex-wrap m-t-70-px">
        <Paper className="hero-paper" variant="outlined" elevation={3}>
          I work on Python, Tensorflow & Neural Nets
        </Paper>
        <Paper className="hero-paper" variant="outlined" elevation={3}>
          I work on Go, Kubernetes & Cloud-Native
        </Paper>
        <Paper className="hero-paper" variant="outlined" elevation={3}>
          I work on TypeScript, React & UI
        </Paper>
      </div>
      </Element>

      <Element name="tf-nets" className="element" >
        <h3>Tensorflow NeuralNets</h3>
        <div className="flex flex-wrap">
          <Paper className="hero-paper" variant="outlined" elevation={3}>
            Coming Soon
          </Paper>
          <Paper className="hero-paper" variant="outlined" elevation={3}>
            Coming Soon
          </Paper>
          <Paper className="hero-paper" variant="outlined" elevation={3}>
            Coming Soon
          </Paper>
        </div>
      </Element>

      <Element name="k8s-archs" className="element" >
      <h3>Kubernetes Architectures</h3>
      <div className="flex flex-wrap">
        <Paper className="hero-paper" variant="outlined" elevation={3}>
          Coming Soon
        </Paper>
        <Paper className="hero-paper" variant="outlined" elevation={3}>
          Coming Soon
        </Paper>
        <Paper className="hero-paper" variant="outlined" elevation={3}>
          Coming Soon
        </Paper>
      </div>
      </Element>

      <Element name="react-comps" className="element" >
      <h3>React Components</h3>
      <div className="flex flex-wrap">
        <Paper className="hero-paper" variant="outlined" elevation={3}>
          Coming Soon
        </Paper>
        <Paper className="hero-paper" variant="outlined" elevation={3}>
          Coming Soon
        </Paper>
        <Paper className="hero-paper" variant="outlined" elevation={3}>
          Coming Soon
        </Paper>
      </div>
      </Element>

      <Element name="contact-me" className="element" >
      <h3>Contact Me</h3>
      <div className="flex flex-direction-column contact-me ">
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
