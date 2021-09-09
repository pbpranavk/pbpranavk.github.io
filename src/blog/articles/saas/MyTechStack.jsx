import React from "react";
// import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";

import { ArticleHeader } from "../../common";

import "../../../App.scss";

const MyTechStack = (props) => {
  return (
    <div>
      <ArticleHeader title="My Tech Stack" backUrl="/articles" />
      <div className="article-content">
        <Typography>Coming soon</Typography>
      </div>
    </div>
  );
};

MyTechStack.propTypes = {};

export default MyTechStack;
