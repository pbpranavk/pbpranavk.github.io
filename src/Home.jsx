import React from "react";
import { AppBar, Toolbar, Box, Typography, Switch } from "@material-ui/core";

import {
  HomeRounded,
  EqualizerRounded,
  WorkRounded,
  ContactMailRounded,
} from "@material-ui/icons";

const Home = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: "#ffffff" }}>
      <Toolbar>
        <Box display="flex" style={{ width: "100%" }}>
          <Box style={{ width: "60%" }}>
            <Typography variant="h5" color="primary">
              Pranav Kumar
            </Typography>
          </Box>
          <Box display="flex" style={{ width: "40%" }}>
            <Typography
              variant="h5"
              style={{ marginLeft: "20px" }}
              color="secondary"
              className="navbar-home"
            >
              Home
            </Typography>
            <HomeRounded className="navbar-home-icon" color="secondary" />
            <Typography
              variant="h5"
              style={{ marginLeft: "20px" }}
              color="secondary"
              className="navbar-skills"
            >
              My Skills
            </Typography>
            <EqualizerRounded
              className="navbar-skills-icon"
              color="secondary"
            />
            <Typography
              variant="h5"
              style={{ marginLeft: "20px" }}
              color="secondary"
              className="navbar-work"
            >
              My Work
            </Typography>
            <WorkRounded className="navbar-work-icon" color="secondary" />
            <Typography
              variant="h5"
              style={{ marginLeft: "20px" }}
              color="secondary"
              className="navbar-contact"
            >
              Contact
            </Typography>
            <ContactMailRounded
              className="navbar-contact-icon"
              color="secondary"
            />
            <Box ml={1}>
              <Switch color="secondary" />
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Home;
