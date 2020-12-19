import React from "react";
import {
  Box,
  Typography,
  LinearProgress,
  useMediaQuery,
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

const Skill = ({ skillName, confidenceLevel }) => {
  const isMobile = useMediaQuery("(max-width:1200px)");

  return (
    <Box
      mt={4}
      display="flex"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <Box
        className="skill-box"
        display="flex"
        style={{ width: "60%", justifyContent: "center" }}
      >
        <Box
          display="flex"
          className="skill-name"
          style={{ width: isMobile ? "25%" : "10%" }}
        >
          <Typography variant="h5" color="secondary">
            {skillName}
          </Typography>
        </Box>
        <Box
          display="flex"
          style={{
            width: "60%",
            alignItems: "center",
          }}
        >
          <BorderLinearProgress variant="determinate" value={confidenceLevel} />
        </Box>
      </Box>
    </Box>
  );
};

const Skills = () => {
  return (
    <Box mt={10}>
      <Box display="flex" style={{ justifyContent: "center" }}>
        <Typography
          variant="h3"
          style={{ fontWeight: "bold", fontSize: "40px" }}
          color="primary"
        >
          My Skills
        </Typography>
      </Box>
      <Box mt={6}>
        {/* <Skill skillName="TypeScript" confidenceLevel={35} /> */}
        <Skill skillName="React" confidenceLevel={85} />
        <Skill skillName="Python" confidenceLevel={75} />
        {/* <Skill skillName="Dart" confidenceLevel={35} />
        <Skill skillName="Flutter" confidenceLevel={55} /> */}
        {/* <Skill skillName="Go, DB Modelling & API design" confidenceLevel={45} /> */}
        <Skill skillName="Cloud" confidenceLevel={35} />
        <Skill skillName="AI" confidenceLevel={65} />
      </Box>
    </Box>
  );
};

export default Skills;
