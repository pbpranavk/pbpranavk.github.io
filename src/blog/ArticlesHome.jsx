import React from "react";
// import PropTypes from 'prop-types';
import { Box, Typography } from "@material-ui/core";

import ArticleCard from "./ArticleCard";
import { ArticleHeader } from "./common";
import { foodAndAsanasMetaData, saaSMetaData } from "./constants";

const ArticlesHome = (props) => {
  return (
    <div>
      <ArticleHeader title="All Articles" backUrl="/" />

      <div className="mt-90 mx-40">
        <Typography variant="h4" style={{ textDecoration: "underline" }}>
          Food & Asanas
        </Typography>
        <Box
          display="flex"
          style={{
            flexWrap: "wrap",
          }}
        >
          {foodAndAsanasMetaData?.map((article) => (
            <ArticleCard
              key={article?.id}
              preHeader={article?.preHeader || ""}
              title={article?.title || ""}
              description={article?.description || ""}
              link={article?.link || ""}
            />
          ))}
        </Box>
      </div>
      <div className="mt-24 mx-40">
        <Typography variant="h4" style={{ textDecoration: "underline" }}>
          SaaS
        </Typography>
        <Box
          display="flex"
          style={{
            flexWrap: "wrap",
          }}
        >
          {saaSMetaData?.map((article) => (
            <ArticleCard
              key={article?.id}
              preHeader={article?.preHeader || ""}
              title={article?.title || ""}
              description={article?.description || ""}
              link={article?.link || ""}
            />
          ))}
        </Box>
      </div>
    </div>
  );
};

ArticlesHome.propTypes = {};

export default ArticlesHome;
