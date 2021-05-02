import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  width90: {
    width: "90%",
  },
  container: {
    width: "100%",
    marginBottom: "4px",
  },
}));

const JourneyCard = ({ index = 0, title = "", description = "", img = "" }) => {
  const classes = useStyles();
  return (
    <Box mt={1} mb={1} style={{ width: "90%" }}>
      <Card >
        <CardContent>
          <Box display="flex" justifyContent="center">
            <div className={classes.container}>
              <Typography variant="h5" style={{ paddingBottom: "8px" }}>{title}</Typography>
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
          </Box>
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
