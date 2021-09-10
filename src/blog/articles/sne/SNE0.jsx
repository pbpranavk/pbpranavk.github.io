import React from "react";
// import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";

import { ArticleHeader } from "../../common";

import "../../../App.scss";

const SNE0 = (props) => {
  return (
    <div>
      <ArticleHeader
        title="Intro to Strategy & Exec section over all"
        backUrl="/articles"
      />
      <div className="article-content">
        <Typography>Strategy</Typography>
        <Typography>
          Alright you have some result to achieve, lets call it an objective.
          Objectives are generally something that is not in your control. Also
          you few somethings under your control. Strategy is all about trying to
          achieve your goal (which is outside your control) with everything in
          your control. I take case studies of 1. Product definition strategy 2.
          Engineering/Building the product strategy 3. Marketing Strategy and
          finally 4. Sales strategy.
        </Typography>
        <Typography className="mt-16">Execution</Typography>
        <Typography>
          Once you have a strategy you will also need a team to execute it. This
          section has everything to deal with how to manage a team and there by
          synergistically achieving goals very smoothly.
        </Typography>
        <Typography className="mt-16">
          This will have two main themes: 1. Planning-Executing-Introspecting 2.
          Winning as a team.
        </Typography>
        <Typography className="mt-16">
          The first part of planning, executing and introspecting will be
          closely coupled with the above four topics of strategy
        </Typography>
        <Typography className="mt-16">
          Whereas in the second topic is independent and will revolve around
          topics such as : 1. Giving constructive feedback to improve your
          co-workers 2. Motivating the team to do better along with maintaining
          a team spirit with the case studies of international sport teams and
          3. How to not loosing heart in the face of adversity and taking on any
          challenge with positive intent and a smarter thought process.
        </Typography>
      </div>
    </div>
  );
};

SNE0.propTypes = {};

export default SNE0;
