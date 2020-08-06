import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  width90: {
    width: "90%",
  },
  container: {
    width: "90%",
    marginBottom: "4px",
  },
}));

const JourneyCard = ({ index = 0, title = "", description = "", img = "" }) => {
  const classes = useStyles();
  return (
    <Box mt={2} mb={2} style={{ width: "90%" }}>
      <Card style={{ paddingBottom: "8px" }}>
        <CardHeader title={<Typography variant="h5">{title}</Typography>} />
        <CardContent>
          <div className={classes.container}>
            <div
              style={{
                float: index % 2 === 0 ? "right" : "left",
                width: "130px",
                height: "100px",
                margin: "4px 8px 0px 8px",
              }}
            >
              <CardMedia
                style={{ width: "100%", height: "100%" }}
                image={img}
                title="Live from space album cover"
              />
            </div>
            <Typography> {description}</Typography>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

JourneyCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default JourneyCard;
