import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";

import { ArticleCard } from "../components";

const articles = [
  {
    key: 1,
    imgSrc: "snn.svg",
    title: "Foundations of Neural Nets",
    desc: `This article covers how to build a very basic Neural Network
            with layers and activation function.
            `,
    link: "https://www.linkedin.com/pulse/foundations-neural-nets-pranav-kumar-pb/",
  },
  {
    key: 2,
    imgSrc: "dnn.svg",
    title: "Deep Neural Nets & Improving them",
    desc: `Extending Shallow neural nets to multiple hidden layers
  and improving their accuracy`,
    link: "https://www.linkedin.com/pulse/deep-neural-nets-improving-them-pranav-kumar-pb/",
  },
  {
    key: 3,
    imgSrc: "cnn.svg",
    title: "Convolutions-Pooling-Flattening",
    desc: `Using Convolutions and pooling to build Neural Networks that can
            deal better with image data.`,
    link: "https://www.linkedin.com/pulse/convolutions-pooling-flattening-pranav-kumar-pb/",
  },
  {
    key: 4,
    imgSrc: "rnn-1.svg",
    title: "Backprop through time",
    desc: `Using Memory (LSTM & GRUs) Networks and Word2Vec to work on NLP Tasks`,
    link: "https://www.linkedin.com/pulse/backprop-through-time-pranav-kumar-pb/",
  },
  // {
  //   key: 5,
  //   imgSrc: "rnn-2.svg",
  //   title: "Recurrent Neural Network for Time Series",
  //   desc: `Using windowing and Memory (LSTM & GRUs) to work with time series data`,
  //   link: "/article/rnn-2",
  // },
];

const ArticlesSection = ({ classes = {} }) => {
  return (
    <>
      <Box mt={10}>
        <Box display="flex" className={classes.justifyContentCenter}>
          <Typography
            variant="h3"
            className={classes.sectionTitle}
            color="primary"
          >
            Articles
          </Typography>
        </Box>
        <Box
          display="flex"
          className={`${classes.sectionContent} article-container`}
          style={{
            overflowX: "auto",
            overflowY: "hidden",
            height: "520px",
            flexWrap: "nowrap",
            justifyContent: "flex-start",
            width: "95%",
            margin: "auto",
          }}
        >
          {articles?.map((article) => (
            <ArticleCard
              id={article?.key}
              imgSrc={article?.imgSrc}
              title={article?.title}
              desc={article?.desc}
              link={article?.link}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

ArticlesSection.propTypes = {
  classes: PropTypes.object,
};

export default ArticlesSection;
