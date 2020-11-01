import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  CssBaseline,
  AppBar,
  Collapse,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import {
  Menu,
  ChevronLeft,
  ChevronRight,
  Inbox,
  ExpandLess,
  ExpandMore,
  StarBorder,
} from "@material-ui/icons";

const drawerWidth = 240;

const listItemsData = [
  {
    title: "React Foundation",
    topics: ["Why React?", "React Foundation - 2", "React Foundation - 3"],
  },
  {
    title: "React Hooks",
    topics: ["React Hooks - 1", "React Hooks - 2", "React Hooks - 3"],
  },
  {
    title: "React Performance & Confidence",
    topics: [
      "React Performance & Confidence - 1",
      "React Performance & Confidence - 2",
      "React Performance & Confidence - 3",
    ],
  },
  {
    title: "Material Hooks",
    topics: ["Material Hooks - 1", "Material Hooks - 2", "Material Hooks - 3"],
  },
];

const posts = {
  "Why React?": "Why choose react.....",
};

const getInitListItemState = () => {
  const initState = {};
  listItemsData.forEach((data) => {
    if (data.title === "React Foundation") {
      initState[data?.title] = true;
    } else {
      initState[data?.title] = false;
    }
  });
  return initState;
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const EverythingReact = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [selectedPost, setSelectedPost] = useState("Why React?");
  const [nestedOpenHash, setNestedOpenHash] = useState(getInitListItemState());

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleNestedListOpen = (title) => {
    const updatedNestedOpenHash = { ...nestedOpenHash };
    updatedNestedOpenHash[title] = !updatedNestedOpenHash[title];
    setNestedOpenHash({ ...updatedNestedOpenHash });
  };

  const handleSelectTopic = (topic) => {
    setSelectedPost(topic);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerOpen,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, drawerOpen && classes.hide)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            React Blog
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {listItemsData.map(({ title, topics }) => (
            <>
              <ListItem
                button
                onClick={() => {
                  handleNestedListOpen(title);
                }}
              >
                <ListItemIcon>
                  <Inbox />
                </ListItemIcon>
                <ListItemText primary={title} />
                {nestedOpenHash[title] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={nestedOpenHash[title]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {topics?.map((child) => (
                    <ListItem
                      button
                      selected={selectedPost === child}
                      className={classes.nested}
                      onClick={() => {
                        handleSelectTopic(child);
                      }}
                    >
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary={child} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpen,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>{posts[selectedPost]}</Typography>
      </main>
    </div>
  );
};

EverythingReact.propTypes = {};

export default EverythingReact;
