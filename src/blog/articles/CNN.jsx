import React from "react";
// import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";

import { ArticleHeader } from "../common";

import "../../App.scss";

const CNN = (props) => {
  return (
    <div>
      <ArticleHeader title="Convoluted Neural Network" backUrl="/" />
      <div className="article-content">
        <Typography>Convoluted Neural Network</Typography>
        <Typography className="mt-16">
          A Convoluted Neural Network with many hidden layer
        </Typography>
        <Typography className="mt-16">Coming Soon</Typography>
      </div>
    </div>
  );
};

CNN.propTypes = {};

export default CNN;
