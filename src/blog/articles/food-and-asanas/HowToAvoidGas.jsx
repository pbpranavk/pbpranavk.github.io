import React from "react";
// import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";

import { ArticleHeader } from "../../common";

import "../../../App.scss";

const HowToAvoidGas = (props) => {
  return (
    <div>
      <ArticleHeader title="How to Avoid Gas" backUrl="/articles" />
      <div className="article-content">
        <Typography>Coming soon</Typography>
      </div>
    </div>
  );
};

HowToAvoidGas.propTypes = {};

export default HowToAvoidGas;
