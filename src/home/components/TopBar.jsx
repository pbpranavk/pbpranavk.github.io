import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  AppBar,
  Toolbar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import {
  HomeRounded,
  EqualizerRounded,
  WorkRounded,
  DirectionsRounded,
  ContactMailRounded,
  Book,
} from "@material-ui/icons";
import { Menu } from "@material-ui/icons";

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
      return <Book />;
    }
    case 4: {
      return <DirectionsRounded />;
    }
    case 5: {
      return <ContactMailRounded />;
    }
    default: {
      return <HomeRounded />;
    }
  }
};

const links = [
  // { to: "home", className: "navbar-home", title: "Home" },
  {
    to: "skills",
    className: "navbar-skills",
    title: "Skills",
  },
  { to: "projects", className: "navbar-work", title: "Projects" },
  // {
  //   to: "articles",
  //   className: "navbar-home",
  //   title: "Articles",
  // },
  {
    to: "experience",
    className: "navbar-home",
    title: "Experience & Education",
  },
];

const useStyles = makeStyles(() => ({
  cursorPointer: {
    cursor: "pointer",
  },
  whiteBackground: {
    backgroundColor: "#ffffff",
  },
  navLinks: {
    width: "70%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  navLinksThin: {
    width: "40%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  navLinkText: {
    marginLeft: "20px",
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

  return (
    <>
      <AppBar position="fixed" className={classes.whiteBackground}>
        <Toolbar>
          <Box display="flex" className="width-100-percent">
            <Box
              className={
                isMaxWidth600 ? "width-60-percent" : "width-30-percent"
              }
            >
              <Link
                activeClass="active"
                className="test1"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Typography
                  className={classes.cursorPointer}
                  variant="h5"
                  color="primary"
                >
                  P.B. Pranav Kumar
                </Typography>
              </Link>
            </Box>
            <Box
              display="flex"
              className={
                isMaxWidth600 ? classes.navLinksThin : classes.navLinks
              }
            >
              {!isMaxWidth600 ? (
                <>
                  {links?.map((link) => (
                    <Link
                      activeClass="active"
                      className="test1"
                      to={link.to}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      <Typography
                        variant="h5"
                        color="secondary"
                        className={`${link.className} ${classes.navLinkText}`}
                      >
                        {link.title}
                      </Typography>
                    </Link>
                  ))}
                </>
              ) : (
                <Menu
                  onClick={toggleDrawer}
                  className={classes.cursorPointer}
                  color={"primary"}
                />
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor={"right"} open={showDrawer} onClose={toggleDrawer}>
        <Box className="width-250-px">
          <List>
            {links.map(({ title, to }, index) => (
              <Link
                activeClass="active"
                className="test1"
                to={to}
                onClick={toggleDrawer}
                spy={true}
                smooth={true}
                duration={500}
              >
                <ListItem button key={title}>
                  <ListItemIcon>{getIcon(index)}</ListItemIcon>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Home;
