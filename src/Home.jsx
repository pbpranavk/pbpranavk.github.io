import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  // Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
// import MaterialLink from "@material-ui/core/Link";
import {
  HomeRounded,
  EqualizerRounded,
  WorkRounded,
  DirectionsRounded,
  ContactMailRounded,
  Book,
} from "@material-ui/icons";
import { Link } from "react-scroll";
import { Menu } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  mobileMenu: {
    cursor: "pointer",
  },
}));

const Home = () => {
  const classes = useStyles();
  const isMaxWidth600 = useMediaQuery("(max-width:600px)");
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const getIcon = (index) => {
    switch (index) {
      case 0: {
        return <HomeRounded />;
      }
      case 1: {
        return <EqualizerRounded />;
      }
      case 2: {
        return <WorkRounded />;
      }
      case 3: {
        return <DirectionsRounded />;
      }
      case 4: {
        return <Book />;
      }
      case 5: {
        return <ContactMailRounded />;
      }
      default: {
        return <HomeRounded />;
      }
    }
  };

  const handleDrawerLink = () => {
    toggleDrawer();
  };

  return (
    <>
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
                  P.B. Pranav Kumar
                </Typography>
              </Link>
            </Box>
            <Box
              display="flex"
              style={{
                width: "45%",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              {!isMaxWidth600 && (
                <>
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
                      Skills
                    </Typography>
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
                      Work
                    </Typography>
                  </Link>
                  <Link
                    activeClass="active"
                    className="test1"
                    to="journey"
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
                      Journey
                    </Typography>
                  </Link>
                  {/* <Link
                    activeClass="active"
                    className="test1"
                    to="blogs"
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
                      Blogs
                    </Typography>
                  </Link> */}
                  {/* <Link
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
                  </Link> */}

                  {/* <Button
                    className="ml-20"
                    color="primary"
                    variant="contained"
                    // rel="noopener noreferrer"
                    href="https://pbpranavk.github.io/research/"
                  >
                    Research
                  </Button> */}
                </>
              )}
              {isMaxWidth600 && (
                <Menu
                  onClick={toggleDrawer}
                  className={classes.mobileMenu}
                  color={"primary"}
                />
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor={"right"} open={showDrawer} onClose={toggleDrawer}>
        <Box style={{ width: "250px" }}>
          <List>
            {[
              { text: "Home", to: "home" },
              { text: "My Skills", to: "skills" },
              { text: "My Work", to: "work" },
              { text: "My Journey", to: "journey" },
              // { text: "My Blogs", to: "blogs" },
              // { text: "Contact", to: "contact" },
            ].map(({ text, to }, index) => (
              <Link
                activeClass="active"
                className="test1"
                to={to}
                onClick={handleDrawerLink}
                spy={true}
                smooth={true}
                duration={500}
              >
                <ListItem button key={text}>
                  <ListItemIcon>{getIcon(index)}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            ))}
            {/* <Button
              className="ml-20 mt-20"
              color="primary"
              variant="contained"
              rel="noopener noreferrer"
              target="_blank"
              href="https://pbpranavk.github.io/research/"
            >
              Research
            </Button> */}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Home;
