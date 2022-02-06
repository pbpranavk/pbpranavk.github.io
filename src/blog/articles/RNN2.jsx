import React from "react";
// import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";

import { ArticleHeader } from "../common";

import "../../App.scss";

const RNN2 = (props) => {
  return (
    <div>
      <ArticleHeader
        title="Recurrent Neural Network - Time series"
        backUrl="/"
      />
      <div className="article-content">
        <Typography>Recurrent Neural Network - Time series</Typography>
        <Typography className="mt-16">
          A Recurrent Neural Network with many hidden layer
        </Typography>
        <Typography className="mt-16">Coming Soon</Typography>
      </div>
    </div>
  );
};

RNN2.propTypes = {};

export default RNN2;
