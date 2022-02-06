import React from "react";
// import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";

import { ArticleHeader } from "../common";

import "../../App.scss";

const RNN1 = (props) => {
  return (
    <div>
      <ArticleHeader title="Recurrent Neural Network - NLP" backUrl="/" />
      <div className="article-content">
        <Typography>Recurrent Neural Network - NLP</Typography>
        <Typography className="mt-16">
          A Recurrent Neural Network with many hidden layer
        </Typography>
        <Typography className="mt-16">Coming Soon</Typography>
      </div>
    </div>
  );
};

RNN1.propTypes = {};

export default RNN1;
