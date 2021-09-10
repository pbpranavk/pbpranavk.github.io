import React from "react";
// import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";

import { ArticleHeader } from "../../common";

import "../../../App.scss";

const Tech0 = (props) => {
  return (
    <div>
      <ArticleHeader title="My Tech Stack" backUrl="/articles" />
      <div className="article-content">
        <Typography>My Technology stack:</Typography>
        <Typography className="mt-16">
          React and React Native from Web and mobile frontends.
        </Typography>
        <Typography className="mt-16">
          Python for BE and Data analytics.
        </Typography>
      </div>
    </div>
  );
};

Tech0.propTypes = {};

export default Tech0;
