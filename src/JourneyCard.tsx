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
}));

const JourneyCard = ({ title = "", description = "", img = "" }) => {
  const classes = useStyles();
  return (
    <Box mt={2} mb={2} style={{ width: "90%" }}>
      <Card>
        <CardHeader title={<Typography variant="h5">{title}</Typography>} />
        <CardContent>
          <Box display="flex">
            <Typography className={classes.width90}> {description}</Typography>
            <CardMedia
              style={{ width: "100px", height: "100px" }}
              image={img}
              title="Live from space album cover"
            />
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
