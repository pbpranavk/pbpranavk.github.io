import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    margin: "2%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
});

const ArticleCard = ({
  className = "",
  preHeader = "",
  title = "",
  description = "",
  link = "",
}) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={`${classes.root} ${className}`}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {preHeader}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={() => {
            history.push(link);
          }}
        >
          Read
        </Button>
      </CardActions>
    </Card>
  );
};

ArticleCard.propTypes = {
  preHeader: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
};

export default ArticleCard;
