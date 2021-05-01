import React from "react";
// import PropTypes from "prop-types";
import { ArticleHeader } from "../common";

const Recursion = (props) => {
  return (
    <div>
      <ArticleHeader title="recursion" backUrl="/articles" />
      <div style={{ marginTop: "70px" }}>recursion</div>
    </div>
  );
};

Recursion.propTypes = {};

export default Recursion;
