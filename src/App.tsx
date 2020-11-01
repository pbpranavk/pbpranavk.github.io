import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PortfolioHome from "./PortfolioHome";
import LearnReact from "./LearnReact";

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
          <Route path="/learn-react">
            <LearnReact />
          </Route>
          <Route path="/learn-rn">learn RN - Coming Soon</Route>
          <Route path="/">
            <PortfolioHome />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
