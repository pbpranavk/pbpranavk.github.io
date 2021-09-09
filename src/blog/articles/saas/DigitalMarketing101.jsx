import React from "react";
// import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";

import { ArticleHeader } from "../../common";

import "../../../App.scss";

const DigitalMarketing101 = (props) => {
  return (
    <div>
      <ArticleHeader title="Digital Marketing 101" backUrl="/articles" />
      <div className="article-content">
        <Typography>Coming soon</Typography>
      </div>
    </div>
  );
};

DigitalMarketing101.propTypes = {};

export default DigitalMarketing101;
