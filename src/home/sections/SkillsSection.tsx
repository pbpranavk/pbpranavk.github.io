import React from "react";
import {
  Box,
  Typography,
  LinearProgress,
  useMediaQuery,
  makeStyles,
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
    width: "60%",
    justifyContent: "center",
  },
});

const Skill = ({ skillName, confidenceLevel }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:1200px)");

  return (
    <Box mt={4} display="flex" className={classes.skillsContent}>
      <Box display="flex" className={`${classes.skillBox} skill-box`}>
        <Box
          display="flex"
          className="skill-name"
          style={{ width: isMobile ? "35%" : "20%" }}
        >
          <Typography variant="h5" color="secondary">
            {skillName}
          </Typography>
        </Box>
        <Box display="flex" className={classes.skillBox}>
          <BorderLinearProgress variant="determinate" value={confidenceLevel} />
        </Box>
      </Box>
    </Box>
  );
};

const SkillsSection = ({ classes = { justifyContentCenter: "" } }) => {
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
      <Box mt={6}>
        <Skill skillName="React" confidenceLevel={85} />
        <Skill skillName="Python" confidenceLevel={75} />
        <Skill skillName="Data Structures & Algorithms" confidenceLevel={55} />
        <Skill skillName="Infra" confidenceLevel={35} />
      </Box>
    </Box>
  );
};

export default SkillsSection;
