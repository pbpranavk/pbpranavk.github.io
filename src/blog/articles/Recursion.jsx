import React from "react";
// import PropTypes from "prop-types";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { ArticleHeader } from "../common";

import "../../App.scss";

const Recursion = (props) => {
  return (
    <div>
      <ArticleHeader title="Recursion" backUrl="/articles" />
      <div className="article-content">
        <Typography className="mt-16">
          Recursion is a way to solve problems, in this methodology a function
          is called by itself.
        </Typography>
        <Typography className="mt-16">
          The main idea here is to solve the problem for input = 0 || 1 (Base
          case). For input = k (some random number in the input range) and then
          for input k + 1.
        </Typography>
        <Typography className="mt-16">Applications are:</Typography>
        <List>
          {[
            "1. Dynamic Programming",
            "2. Backtracking",
            "3. Divide & Conquer(Binary Search, Quick Sort, Merger Sort)",
            "4. DFS for Graph, Inorder/Preorder/Postorder traversal for trees",
          ]?.map((application) => (
            <ListItem>
              <ListItemText>{application}</ListItemText>
            </ListItem>
          ))}
        </List>

        <Typography>
          Tail recursion is faster than non-tail recursion because modern
          compilers replace recursion stack with goto.
        </Typography>
      </div>
    </div>
  );
};

Recursion.propTypes = {};

export default Recursion;
