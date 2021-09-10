import React from "react";
// import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";

import { ArticleHeader } from "../../common";

import "../../../App.scss";

const SNE2 = (props) => {
  return (
    <div>
      <ArticleHeader
        title="Building a team to solve hard problems"
        backUrl="/articles"
      />
      <div className="article-content">
        <Typography>Coming soon</Typography>
      </div>
    </div>
  );
};

SNE2.propTypes = {};

export default SNE2;
