import React from 'react';
import './App.scss';

import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

function App() {
  return (
    <div className="App">
      <AppBar className="app-bar" position="static">
          <div className="flex height-100-percent">
          <div className="flex-align-items-center">My New Portfolio</div>
          <div className="flex-align-items-end">
            <Button>Tf Nets</Button>
            <Button>K8s archs</Button>
            <Button>React Comps</Button>
            <Button>Contact Me</Button>
          </div>
          </div>
      </AppBar>
      <div className="flex flex-wrap">
          <Paper className="hero-paper" variant="outlined" elevation={3} >
            I work on Python, Tensorflow & Neural Nets
          </Paper>
          <Paper className="hero-paper" variant="outlined" elevation={3} >
            I work on Go, Kubernetes & Cloud-Native
           </Paper>
          <Paper className="hero-paper" variant="outlined" elevation={3} >
            I work on TypeScript, React & UI
          </Paper>
      </div>

      <h3>Tensorflow NeuralNets</h3>
      <div className="flex flex-wrap">
        <Paper className="hero-paper" variant="outlined" elevation={3} >
          Coming Soon
        </Paper>
        <Paper className="hero-paper" variant="outlined" elevation={3} >
          Coming Soon
        </Paper>
        <Paper className="hero-paper" variant="outlined" elevation={3} >
          Coming Soon
        </Paper>
      </div>

      <h3>Kubernetes Architectures</h3>
      <div className="flex flex-wrap">
        <Paper className="hero-paper" variant="outlined" elevation={3} >
          Coming Soon
        </Paper>
        <Paper className="hero-paper" variant="outlined" elevation={3} >
          Coming Soon
        </Paper>
        <Paper className="hero-paper" variant="outlined" elevation={3} >
          Coming Soon
        </Paper>
      </div>

      <h3>React Components</h3>
      <div className="flex flex-wrap">
        <Paper className="hero-paper" variant="outlined" elevation={3} >
          Coming Soon
        </Paper>
        <Paper className="hero-paper" variant="outlined" elevation={3} >
          Coming Soon
        </Paper>
        <Paper className="hero-paper" variant="outlined" elevation={3} >
          Coming Soon
        </Paper>
      </div>

      <h3>Contact Me</h3>
      <div className="flex flex-direction-column contact-me ">
      <TextField className="contact-me-input" label="Name" variant="outlined" />
      <TextField className="contact-me-input" label="Email" variant="outlined" />
      <TextField className="contact-me-input" label="Message" variant="outlined" multiline
          rowsMax={6} />
      <Button className="m-10-px" variant="contained">Send</Button>
      </div>

      <h3>Around the Web</h3>
      <Icon>add_circle</Icon>
      <Icon>add_circle</Icon>
    </div>
  );
}

export default App;
