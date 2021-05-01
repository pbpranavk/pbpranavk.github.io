import React from "react";
// import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import {
  Box,
  Typography,
  makeStyles,
  Card,
  CardContent,
  Button,
} from "@material-ui/core";

import { articlesMetaData } from "./constants";
import ArticleCard from "./ArticleCard";

const useStyles = makeStyles({
  list: {
    margin: "20px",
  },
});

const ArticlesList = (props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.list}>
      <Box display="flex" style={{ justifyContent: "center" }}>
        <Typography
          variant="h3"
          style={{ fontWeight: "bold", fontSize: "40px" }}
          color="primary"
        >
          Articles
        </Typography>
      </Box>
      <Box
        display="flex"
        style={{
          marginTop: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {articlesMetaData?.slice(0, 3)?.map((article, index) => (
          <ArticleCard
            key={article?.id}
            preHeader={article?.preHeader || ""}
            title={article?.title || ""}
            description={article?.description || ""}
            link={article?.link || ""}
          />
        ))}
        <Card className="ml-20" style={{ maxWidth: 275, margin: "2%" }}>
          <CardContent>
            <Typography variant="h5">View All Articles</Typography>
            <Typography>
              See multiple articles on python, react & infra
            </Typography>
            <Button
              className="mt-20"
              variant="outlined"
              size="small"
              onClick={() => {
                history.push("/articles");
              }}
            >
              Go to Articles Home
            </Button>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

ArticlesList.propTypes = {};

export default ArticlesList;
