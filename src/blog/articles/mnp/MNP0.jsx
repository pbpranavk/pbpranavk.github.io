import React from "react";
// import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";

import { ArticleHeader } from "../../common";

import "../../../App.scss";

const MNP0 = (props) => {
  return (
    <div>
      <ArticleHeader
        title="What do I want to do with this section?"
        backUrl="/articles"
      />
      <div className="article-content">
        <Typography>
          Any market is nothing but a play of demand and supply.
        </Typography>
        <Typography className="mt-16">
          In this whole section I just go over every significant industry
          through the lense of data. Any start up will be only successful if it
          has the right product market fit. In this section I try to study all
          the markets, products and there by understanding the science behind
          products and markets as well as how to build proper appropriate
          products that markets want.
        </Typography>
        <Typography className="mt-16">
          Unless a start up knows its market, it can not build a product, even
          if it does build it wont get audience for its marketing, even if it
          continues to market its product, there wont be any sales and without a
          cash inflow, it can never be profitable or a sustainable let alone
          prosperous business.
        </Typography>
        <Typography className="mt-16">
          This space is an attempt to understand markets and which will make way
          to understand how profitable sustainable product lines are built.
        </Typography>
      </div>
    </div>
  );
};

MNP0.propTypes = {};

export default MNP0;
