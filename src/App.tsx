import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { routes } from "./blog/article.routes";
import Home from "./home/Home";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#E86410" },
    secondary: { main: "#DDAB8B" },
  },
  typography: {
    fontFamily: '"Comic Sans MS"',
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
