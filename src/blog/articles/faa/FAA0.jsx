import React from "react";
// import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";

import { ArticleHeader } from "../../common";

import "../../../App.scss";

const FAA0 = (props) => {
  return (
    <div>
      <ArticleHeader title="Intro to Food and Asanas" backUrl="/articles" />
      <div className="article-content">
        <Typography>
          A very Indian way to healthy food, exercises and way of life
        </Typography>
        <Typography className="mt-16">
          There are two major sections here: 1. How to cook & eat naturally and
          2. Yoga asanas for a fit & vibrant life.
        </Typography>
        <Typography className="mt-16">
          Indian food has a mix of spices and herbs to ensure a tasty and well
          balanced diet. This is an effort to go through all those recipes and
          also recording them.
        </Typography>
        <Typography className="mt-16">
          With WFH becoming the new normal find out everything you need to know
          to give your body the perfect blend of exercise and relaxation to
          energise your daily life.
        </Typography>
      </div>
    </div>
  );
};

FAA0.propTypes = {};

export default FAA0;
