import React from "react";
import {
  Box,
  Typography,
  LinearProgress,
  useMediaQuery,
  makeStyles,
  Grid,
  Chip,
} from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 23,
    borderRadius: 5,
    width: "100%",
  },
  colorPrimary: {
    backgroundColor: "secondary",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#e38e54",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  skillsContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  skillBox: {
    width: "50%",
    justifyContent: "center",
  },
  skillBoxConfidence: {
    width: "30%",
    justifyContent: "center",
  },
});

const Skill = ({ isLeft = false, skillName, confidenceLevel }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:1200px)");

  if (isMobile) {
    return (
      <div className="flex-justify-content-center">
        <Chip className="mx-8 mt-8" label={skillName} />
      </div>
    );
  }

  return (
    <Box
      mt={4}
      display="flex"
      className={`${classes.skillsContent} ${
        isTablet
          ? "justify-content-center"
          : isLeft
          ? "justify-content-end"
          : "justify-content-start"
      }`}
    >
      <Box display="flex" className={"width-85-percent"} alignItems={"center"}>
        <Box display="flex" style={{ width: "70%" }}>
          <Typography variant="h5" color="secondary">
            {skillName}
          </Typography>
        </Box>
        <Box display="flex" className={classes.skillBoxConfidence}>
          <BorderLinearProgress variant="determinate" value={confidenceLevel} />
        </Box>
      </Box>
    </Box>
  );
};

const SkillsSection = ({ classes = { justifyContentCenter: "" } }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box mt={10}>
      <Box display="flex" className={classes.justifyContentCenter}>
        <Typography
          variant="h3"
          style={{ fontWeight: "bold", fontSize: "40px" }}
          color="primary"
        >
          My Skills
        </Typography>
      </Box>
      <Grid className="mt-16" container={true} spacing={isMobile ? 0 : 4}>
        <Grid item xs={12} lg={6}>
          <Skill skillName="React" confidenceLevel={85} isLeft={true} />
          <Skill
            skillName="Scalable State Design"
            confidenceLevel={55}
            isLeft={true}
          />
          <Skill
            skillName="Data Structures & Algorithms"
            confidenceLevel={75}
            isLeft={true}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Skill skillName="Python" confidenceLevel={85} />
          <Skill skillName="Tensorflow & Keras" confidenceLevel={75} />
          <Skill skillName="Database Schema Design" confidenceLevel={55} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillsSection;
