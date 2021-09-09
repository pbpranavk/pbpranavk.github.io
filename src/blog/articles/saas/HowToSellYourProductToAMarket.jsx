import React from "react";
// import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";

import { ArticleHeader } from "../../common";

import "../../../App.scss";

const HowToSellYourProductToAMarket = (props) => {
  return (
    <div>
      <ArticleHeader
        title="How To Sell Your Product To A Market"
        backUrl="/articles"
      />
      <div className="article-content">
        <Typography>Coming soon</Typography>
      </div>
    </div>
  );
};

HowToSellYourProductToAMarket.propTypes = {};

export default HowToSellYourProductToAMarket;
