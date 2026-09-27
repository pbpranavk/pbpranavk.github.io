import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  AppBar,
  Toolbar,
  IconButton,
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
  EqualizerRounded,
  WorkRounded,
  DirectionsRounded,
} from "@material-ui/icons";
import { Menu } from "@material-ui/icons";

const getIcon = (section) => {
  switch (section) {
    case "skills": return <EqualizerRounded />;
    case "projects": return <WorkRounded />;
    default: return <DirectionsRounded />;
  }
};

const links = [
  {
    to: "skills",
    className: "navbar-skills",
    title: "Skills",
  },
  { to: "projects", className: "navbar-work", title: "Personal Projects" },
  {
    to: "experience",
    className: "navbar-home",
    title: "Experience & Education",
  },
];

const useStyles = makeStyles(() => ({
  cursorPointer: {
    cursor: "pointer",
    fontSize: "17px",
    fontWeight: 600,
    color: "#1e293b",
    letterSpacing: "-0.4px",
  },
  whiteBackground: {
    backgroundColor: "#ffffff",
    boxShadow: "none",
    borderBottom: "1px solid #e2e8f0",
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
    marginLeft: "28px",
    fontSize: "13px",
    fontWeight: 500,
    cursor: "pointer",
  },
}));

const Home = () => {
  const classes = useStyles();
  const isMaxWidth600 = useMediaQuery("(max-width:800px)");
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <>
      <AppBar position="fixed" className={classes.whiteBackground}>
        <Toolbar className="portfolio-navbar-inner">
          <Box display="flex" alignItems="center" className="width-100-percent">
            <Box
              className={
                isMaxWidth600 ? "width-60-percent" : "width-30-percent"
              }
            >
              <Link
                activeClass="active"
                className="portfolio-nav-link"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-88}
                href="#home"
              >
                <Typography
                  className={classes.cursorPointer}
                  variant="h5"
                  color="primary"
                >
                  Pranav Kumar PB
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
                      key={link.to}
                      activeClass="active"
                      className="portfolio-nav-link"
                      to={link.to}
                      href={`#${link.to}`}
                      offset={-88}
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
                <IconButton onClick={toggleDrawer} aria-label="Open navigation" aria-expanded={showDrawer}>
                  <Menu style={{ color: "#475569" }} />
                </IconButton>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer PaperProps={{ className: "portfolio-nav-drawer" }} anchor={"right"} open={showDrawer} onClose={toggleDrawer}>
        <Box className="width-250-px">
          <List>
            {links.map(({ title, to }) => (
              <Link
                key={to}
                activeClass="active"
                className="portfolio-nav-link"
                to={to}
                href={`#${to}`}
                offset={-88}
                onClick={toggleDrawer}
                spy={true}
                smooth={true}
                duration={500}
              >
                <ListItem button key={title}>
                  <ListItemIcon>{getIcon(to)}</ListItemIcon>
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
