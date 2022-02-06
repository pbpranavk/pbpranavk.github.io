import React from "react";
// import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";

import { ArticleHeader } from "../common";

import "../../App.scss";

const DNN = (props) => {
  return (
    <div>
      <ArticleHeader title="Deep Neural Network" backUrl="/" />
      <div className="article-content">
        <Typography>Deep Neural Network</Typography>
        <Typography className="mt-16">
          A Deep Neural Network with many hidden layer
        </Typography>
        <Typography className="mt-16">Coming Soon</Typography>
      </div>
    </div>
  );
};

DNN.propTypes = {};

export default DNN;
