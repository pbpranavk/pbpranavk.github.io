import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const ArticleHeader = ({ title = "", backUrl = "" }) => {
  const history = useHistory();

  return (
    <AppBar position="fixed" style={{ backgroundColor: "#ffffff" }}>
      <Toolbar>
        <Grid container>
          <Grid item xs={1} style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                history.push(backUrl);
              }}
            >
              <ArrowBackIcon color="secondary" />
              <Typography variant="h5" color="secondary">
                Back
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            xs={10}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Typography variant="h3" color="primary">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

ArticleHeader.propTypes = {
  title: PropTypes.string,
};

export default ArticleHeader;
