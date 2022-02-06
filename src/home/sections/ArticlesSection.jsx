import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";

import { ArticleCard } from "../components";

const articles = [
  {
    key: 1,
    imgSrc: "snn.svg",
    title: "Shallow Neural Network",
    desc: `This article covers how to build a very basic Neural Network
            with layers and activation function.
            `,
    link: "/article/snn",
  },
  {
    key: 2,
    imgSrc: "dnn.svg",
    title: "Deep Neural Network",
    desc: `Extending the Shallow neural network to multiple hidden layers
  and training it over many epochs.`,
    link: "/article/dnn",
  },
  {
    key: 3,
    imgSrc: "cnn.svg",
    title: "Convoluted Neural Network",
    desc: `Using Convolutions and pooling to build Neural Networks that can
            deal better with image data.`,
    link: "/article/cnn",
  },
  {
    key: 4,
    imgSrc: "rnn-1.svg",
    title: "Recurrent Neural Network for NLP",
    desc: `Using Memory (LSTM & GRUs) and Word2Vec to work on NLP Tasks`,
    link: "/article/rnn-1",
  },
  {
    key: 5,
    imgSrc: "rnn-2.svg",
    title: "Recurrent Neural Network for Time Series",
    desc: `Using windowing and Memory (LSTM & GRUs) to work with time series data`,
    link: "/article/rnn-2",
  },
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
            height: "500px",
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
