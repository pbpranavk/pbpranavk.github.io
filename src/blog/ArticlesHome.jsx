import React from "react";
// import PropTypes from 'prop-types';
import { Box, Typography } from "@material-ui/core";

import ArticleCard from "./ArticleCard";
import { ArticleHeader } from "./common";
import {
  marketsAndProductsMetaData,
  strategyAndExecMetaData,
} from "./constants";

const ArticlesHome = (props) => {
  return (
    <div>
      <ArticleHeader title="All Articles" backUrl="/" />

      <div className="mt-90 mx-40">
        <Typography
          variant={"h5"}
          style={{
            marginTop: "16px",
            marginBottom: "16px",
          }}
        >
          A place for myself to write my thoughts and introspect as well as
          track my learning and research about everything business. Will this be
          dedicated to just SaaS business or general businesses? I'm not sure
          I'll figure it out later.
        </Typography>
        <Typography variant="h4" style={{ textDecoration: "underline" }}>
          Markets & Products
        </Typography>
        <Box
          display="flex"
          style={{
            flexWrap: "wrap",
          }}
        >
          {marketsAndProductsMetaData?.map((article) => (
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
          Strategy & Execution
        </Typography>
        <Box
          display="flex"
          style={{
            flexWrap: "wrap",
          }}
        >
          {strategyAndExecMetaData?.map((article) => (
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
