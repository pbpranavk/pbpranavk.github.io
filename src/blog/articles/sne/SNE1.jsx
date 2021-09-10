import React from "react";
// import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";

import { ArticleHeader } from "../../common";

import "../../../App.scss";

const SNE1 = (props) => {
  return (
    <div>
      <ArticleHeader title="How to strategies?" backUrl="/articles" />
      <div className="article-content">
        <Typography>Coming soon</Typography>
      </div>
    </div>
  );
};

SNE1.propTypes = {};

export default SNE1;
