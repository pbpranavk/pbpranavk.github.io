import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { routes } from "./blog/article.routes";
import Home from "./home/Home";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#1e40af" },
    secondary: { main: "#64748b" },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
    text: {
      primary: "#1e293b",
      secondary: "#64748b",
    },
  },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    h1: {
      fontFamily:
        '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily:
        '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily:
        '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily:
        '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily:
        '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily:
        '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          {routes?.map((route) => (
            <Route path={route.path} exact={true}>
              {route.component}
            </Route>
          ))}
          <Route path="*" exact={true}>
            Not found
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
