import React from "react";
// import PropTypes from 'prop-types';
import { Box } from "@material-ui/core";

import ArticleCard from "./ArticleCard";
import { ArticleHeader } from "./common";
import { articlesMetaData } from "./constants";

const ArticlesHome = (props) => {
  return (
    <div>
      <ArticleHeader title="All Articles" backUrl="/" />

      <Box
        className="mt-60"
        display="flex"
        style={{
          marginTop: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {articlesMetaData?.map((article) => (
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
  );
};

ArticlesHome.propTypes = {};

export default ArticlesHome;
