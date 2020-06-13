import React from "react";
import { AppBar, Toolbar, Box, Typography, Switch } from "@material-ui/core";
import { Link } from "react-scroll";

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
            <Link
              activeClass="active"
              className="test1"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Typography
                style={{ cursor: "pointer" }}
                variant="h5"
                color="primary"
              >
                Pranav Kumar
              </Typography>
            </Link>
          </Box>
          <Box display="flex" style={{ width: "40%" }}>
            <Link
              activeClass="active"
              className="test1"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Typography
                variant="h5"
                style={{ marginLeft: "20px", cursor: "pointer" }}
                color="secondary"
                className="navbar-home"
              >
                Home
              </Typography>
              <HomeRounded
                style={{ cursor: "pointer" }}
                className="navbar-home-icon"
                color="secondary"
              />
            </Link>
            <Link
              activeClass="active"
              className="test1"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Typography
                variant="h5"
                style={{ marginLeft: "20px", cursor: "pointer" }}
                color="secondary"
                className="navbar-skills"
              >
                My Skills
              </Typography>
              <EqualizerRounded
                style={{ cursor: "pointer" }}
                className="navbar-skills-icon"
                color="secondary"
              />
            </Link>
            <Link
              activeClass="active"
              className="test1"
              to="work"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Typography
                variant="h5"
                style={{ marginLeft: "20px", cursor: "pointer" }}
                color="secondary"
                className="navbar-work"
              >
                My Work
              </Typography>
              <WorkRounded
                style={{ cursor: "pointer" }}
                className="navbar-work-icon"
                color="secondary"
              />
            </Link>
            <Link
              activeClass="active"
              className="test1"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Typography
                variant="h5"
                style={{ marginLeft: "20px", cursor: "pointer" }}
                color="secondary"
                className="navbar-contact"
              >
                Contact
              </Typography>
              <ContactMailRounded
                style={{ cursor: "pointer" }}
                className="navbar-contact-icon"
                color="secondary"
              />
            </Link>
            <Box ml={1}>
              <Switch color="secondary" style={{ cursor: "pointer" }} />
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Home;
