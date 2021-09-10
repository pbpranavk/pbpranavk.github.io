import React from "react";
// import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";

import { ArticleHeader } from "../../common";

import "../../../App.scss";

const MNP1 = (props) => {
  return (
    <div>
      <ArticleHeader title="What is a Market after all?" backUrl="/articles" />
      <div className="article-content">
        <Typography>Coming soon</Typography>
      </div>
    </div>
  );
};

MNP1.propTypes = {};

export default MNP1;
